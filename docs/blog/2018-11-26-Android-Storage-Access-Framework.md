---
layout:  post
title:  "Android Storage Access Framework(SAF)"
date:  2018-11-26 14:54:34 +08:00
categories:  Android SAF
tags:  Android  SAF

---


## SAF存储访问框架介绍
[SAF介绍链接](https://developer.android.google.cn/guide/topics/providers/document-provider)

Android 4.4（API 级别 19）引入了存储访问框架 (SAF)。SAF 让用户能够在其所有首选文档存储提供程序中方便地浏览并打开文档、图像以及其他文件。 用户可以通过易用的标准 UI，以统一方式在所有应用和提供程序中浏览文件和访问最近使用的文件。

## 针对SD Card文件访问读写受限制的问题。
自API 19引入SAF后，应用程序无法直接通过java 的File API进行写操作了。需要用到Android 的`DocumentFile` API 进行间接处理文件。

- 首先需要获取SD Card的读写权限
- 在获取的URI权限基础上创建`DocumentFile.fromTreeUri(context,uri)`
- 根据获取到的权限目录树进行子文件或子文件夹操作，类似于JAVA的File操作。
<!-- more -->
### SD card权限获取方法

1. 通过注册Receiver监听`Intent.ACTION_MEDIA_MOUNTED`,接收有新存储设备挂载，在`Intent.getParcelableExtra（StorageVolume.EXTRA_STORAGE_VOLUME）`里可以获取到分区的名称标识（`uuid`），在获取的分区实例后，直接请求权限：

   ```java
   @Override
   public void onReceive(Context context, Intent intent) {
   if (action.equals(Intent.ACTION_MEDIA_MOUNTED)) {
            // BroadcastReceiver has already cached the MEDIA_MOUNTED
                       // notification Intent in mediaMountedIntent
   if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
    StorageVolume volume=intent.getParcelableExtra(StorageVolume.EXTRA_STORAGE_VOLUME);
    Intent accessIntent = volume.createAccessIntent(null);//传NULL代表整个分区目录授予权限
    startActivityForResult(accessIntent, REQUEST_VOLUME_PERMISSION);
    	}
   }
   }
                        
   ```

2. 通过系统服务框架（System Service Framework）获取存储设置管理服务`StorageManager`

   ```java
   StorageManager storageManager = (StorageManager) context.getSystemService(Context.STORAGE_SERVICE);
   
   ```

   再而查询获取存储设备列表`storageManager.getStorageVolumes();`该API 需要 level 24才能调用。也可以用反射的方法去获取。不过将来Android 9.0 以后，谷歌收紧了非SDK API的访问限制，9.0以后将会抛出classNotFountException 异常。

   ```java
   List<StorageVolume> storageVolumes = storageManager.getStorageVolumes();
   ```

   有了StorageVolume分区列表对象，就可以调用上述的方法创建请求权限的intent了。

3. 通过系统提供的UI选取器，让用户选择预期想要授权的存储设备根目录，在`onActivityResult()`方法里处理返回的URI路径。

   ```java
       private void startOpenDocumentTree() {
           Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT_TREE);
           intent.addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
           intent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
           intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
           startActivityForResult(intent, Constant.REQUEST_DOCUMENT_PERMISSION);
       }
   ```

> Caution: 
>
> 为了下次不用反复请求权限的问题，使用`ContentProvider.takePersistableUriPermission(uri,Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION);`保存在系统了，即使reboot了也依然存在，除非clear APP data.
>
> 获取已授权的URI 列表：`List<UriPermission> persistedUriPermissions = getActivity().getContentResolver().getPersistedUriPermissions();`
>
> 取消授权：`getActivity().getContentResolver().releasePersistableUriPermission(uri,modeFlags);`
>
> 或者`getActivity().revokeUriPermission(permissionUri, Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);`

## 对文件进行处理操作

对受限的文件写操作，如Rename,delete, edit ,需要得到权限URI的`DocumentFile`才能起作用。（这个也是当初很困惑的一个问题，研究许久，这个URI没有直接像查询`MediaStore`那样查询数据库的方法获取URI）

通过`getContentResolver().getPersistedUriPermissions();`获取已授权的tree URI, 使用`DocmentFile` API 一路解析下去到file名称那一级，即是对应的权限的`DocumentFile`对象，就可以对文件进行写操作了。

解析方式：

```java

/**
     * 查询DocumentFile from DocumentFile.fromTreeUri() 针对SAF 访问框架
     *
     * @param context       context
     * @param persistentUri 获得访问权限文件夹的URI  eg: "content://com.android.externalstorage.documents/tree/"
     * @param uuid          storage volume id
     * @param originPath    file path eg: "/storage/emulate/0/DCIM/....."
     * @return found DocumentFile correspond to originPath file
     */
private static DocumentFile findDocumentFile(Context context, Uri persistentUri, String uuid, String originPath) {
     DocumentFile treeDocument = DocumentFile.fromTreeUri(context, persistentUri);
        int indexOf = originPath.indexOf(uuid);
        String substring = originPath.substring(indexOf + uuid.length());
        String[] parts = substring.split(File.separator);//分割斜杠，获取路径目录数组进行查找文件
        for (String part : parts) {
            if (TextUtils.isEmpty(part)) continue;
     DocumentFile nextDocument = treeDocument.findFile(part);
            if (nextDocument != null) {
                treeDocument = nextDocument;
                MyLog.e("【part name:" + treeDocument.getName() + " Uri:" + Utils.decodeUriName(treeDocument.getUri()) + "】\n");
            }
        }
        return treeDocument;
}
```

获取到了已授权的标准`DocumentFile`对象之后，就可以为所欲为了，哈哈，开个玩笑...... 

检测是不是标准URI的`DocumentFile`,使用`DocumentsContract.isDocumentUri(context,tdocumentFile.getUri())` 返回布尔值。