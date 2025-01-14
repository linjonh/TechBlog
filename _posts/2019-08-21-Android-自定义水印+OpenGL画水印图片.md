---
layout:  post
title:  "Android-自定义水印+OpenGL画水印图片"
date:  2019-08-21 15:46:00 +0800
categories:  Android 水印 自定义水印 OpenGL 
tags:  Android OpenGL DrawImage

---
* content
{:toc}
# 自定义编辑水印篇

自定义编辑水印涉及到控件的自定义，控件位置的移动，图片大小和文字大小缩放，文字的颜色改变，还有水印的透明度。

> 水印元素包括了

- 图片水印

- 文字水印

> 涉及到的控件

	- 模拟屏幕的一个容器控件，用于放置水印元素的
	- 图片水印元素控件
	- 文字水印元素控件
	- 文字选择颜色值控件

> 水印需要保存的信息：数据库信息

- 水印透明度alpha

- 水印宽度widthRatio比例（涉及到横竖屏）

- 水印高度heightRatio比例（涉及到横竖屏）

- 水印位置centerX比例（涉及到横竖屏）

- 水印位置centerY比例（涉及到横竖屏）

- 文字水印颜色color

- 文字水印文案信息

- 文字缩放大小值textSize

- 图片水印文件路径

- 水印元素ID（数据库ID自动生成）

  

## 控件手势移动

```java
/**
 * @author jaysen.lin@foxmail.com
 * @since 2019/8/8
 */
public class MoveGestureDetector {
    private float x = 0, y = 0;

    public MoveGestureDetector() {
    }

    public boolean detectMoveAction(View view, MotionEvent event) {
        switch (event.getAction()) {
             case MotionEvent.ACTION_DOWN:
                x = event.getRawX();
                y = event.getRawY();
                return true;
             case MotionEvent.ACTION_MOVE:
                float x1 = event.getRawX();
                float y1 = event.getRawY();

                int dx = (int) (x1 - x);
                int dy = (int) (y1 - y);

                int l = view.getLeft() + dx;
                int t = view.getTop() + dy;
                int r = view.getRight() + dx;
                int b = view.getBottom() + dy;
                if (l < 0) {//超出父类控件左边际，重置为0
                    l = 0;
                    r = l + view.getWidth();
                }
                if (t < 0) {//超出父类控件上边际，重置为0
                    t = 0;
                    b = t + view.getHeight();
                }
                ViewParent parent = view.getParent();
                ViewGroup p = (ViewGroup) parent;
                if (r > p.getWidth()) {//超出父类控件右边际，重置
                    r = p.getWidth();
                    l = r - view.getWidth();
                }
                if (b > p.getHeight()) {//超出父类控件下边际，重置
                    b = p.getHeight();
                    t = b - view.getHeight();
                }
                float halfW = view.getMeasuredWidth() / 2.0f;
                float halfH = view.getMeasuredHeight() / 2.0f;
                float centerXRatio = (l + halfW) / p.getMeasuredWidth();
                float centerYRatio = (t + halfH) / p.getMeasuredHeight();
                //todo 把centerXRatio，centerYRatio的横竖屏信息保存起来
                //还有就是刷新控件重新计算大小和布局
                view.requestLayout();
                
                x = x1;
                y = y1;
                return true;
            case MotionEvent.ACTION_CANCEL:
            case MotionEvent.ACTION_UP:
                return true;
        }
        return false;
    }
```
<!-- more -->
## 控件位置计算

```java
/**
 * @author jaysen.lin@foxmail.com
 * @since 2019/8/8
 */
public class PositionCalculator {
		//用于代理计算child比例大小
        public Size calculateChildSize(int pWidth, int pHeight) {
            
        }
		public void updateCenterXY() {
            //当缩放超出左边界或上边际时调用该方法更新centerX和centerY，需要考虑横竖屏
            //调用getLeftOrTop（...）获取原先的left或者top，来更新左边界上边界再重新计算centerX和
           //centerY占父容器的比例。
		}
        public int getLeft() {
            //在child layout()方法里调用该方法获取计算得到的left，需要考虑横竖屏
        }
        public int getTop() {
            //在child layout()方法里调用该方法获取计算得到的top，需要考虑横竖屏
        }
    
       public int getLeftOrTop(float centerRatio, int viewSize, int parentSize) {
        float half = viewSize / 2.0f;
        float pointSide = centerRatio * parentSize - half;
        if (pointSide < 0) {
            return 0;
        }
        return (int) pointSide;
    }
}

```

## 控件大小计算

`View.onMeasure()`调用周期

![onMeasure调用](http://img.mukewang.com/5850b96600017b2d05000442.jpg)



通过`View.requestLayout()`来刷新计算控件大小，控件重写了`View.onMeasure()`计算控件的大小，重写`View.layout()`来布局当前控件的位置和宽高。

> `TextView`的水印自定义控件使用到了`android.text.StaticLayout.java`来自动计算字体的大小宽高

## 控件放大缩小算法和进度条计算算法

- 图片水印控件放大缩小算法

  ```java
   private void iniView(){
       //通过decodeImageBounds获取得到imageSize
        this.imageMaxSide = Math.max(imageSize.getWidth(), this.imageSize.getHeight());
          if (this.imageMaxSide == 0) {
              this.imageMaxSide = this.screenMinSide;
          }
        float scaledFactorInitProgress = 1.0f;
          if (imageItemInfo.widthRatio == 0.0f) {
              Size size = new Size(this.imageSize.getWidth(), this.imageSize.getHeight());
              if (this.imageMaxSide > this.screenMinSide / 3) {
                  scaledFactorInitProgress = 1.0f * this.screenMinSide / 3.0f / this.imageMaxSide;
                  size.setWidth((int) (size.getWidth() * scaledFactorInitProgress));
                  size.setHeight((int) (size.getHeight() * scaledFactorInitProgress));
              }
              imageItemInfo.widthRatio = getWidthRatio(size.getWidth());
              imageItemInfo.heightRatio = getHeightRatio(size.getHeight());
          } else {
              scaledFactorInitProgress = imageItemInfo.widthRatio * this.screenWidth / this.imageSize.getWidth();
          }
               initProgressBar(scaledFactorInitProgress);
  }
  
  private float getWidthRatio(int scaledWidth) {
      return 1.0f * scaledWidth / this.screenWidth;
  }
  
  //
  private float getHeightRatio(int scaledHeight) {
      return 1.0f * scaledHeight / this.screenHeight;
  }
  
  
  private void initProgressBar(float initProgressRatio) {
          float progress = (int) (initProgressRatio * 10_0000.0f);
          float scaledFactor1_8 = 1.0f;//8分之1
          float scaledFactor1_1 = this.screenMinSide * 1.0f / this.imageMaxSide;
          if (this.imageMaxSide > this.screenMinSide / 8) {//8分之1
              scaledFactor1_8 = 1.0f * this.screenMinSide / 8.0f / this.imageMaxSide;
          } 
       	int progress1_8 = (int) (scaledFactor1_8 * 10_0000.0f);
          int progress1_1 = (int) (scaledFactor1_1 * 10_0000.0f);
          if (progress1_1 < progress1_8) {
              progress1_1 = progress1_8;
          }
          this.maxProgress = progress1_1 - progress1_8;
          this.startProgress = progress1_8;
          this.mSizeSeekBar.setMax(this.maxProgress);
       	this.mSizeSeekBar.setProgress((int) (progress - this.startProgress));
      }
  ```

- 文字水印控件放大缩小算法

  ```java
  // mSizeSeekBar.setMax(500);//最大值500
  
  private int getProgressFromTextSize(float textSize) {//textSize in sp
          return (int) ((textSize - 13.0f) * 1.0f / 67.0f * 500.0f);
  }
  
  private int getTextSizeFromProgress(int progress) {
          return (int) (13.0f + (1.0f * progress / 500.0f * 67.0f));
  }
  ```

- 文字水印颜色的选择和进度条的转换算法

  ```java
    public int getColorFromProgress(int progress) {
          int r = 0;
        int g = 0;
          int b = 0;
  
          if (progress < 256) {
              b = progress;
          } else if (progress < 256 * 2) {
              g = progress % 256;
              b = 256 - progress % 256;
          } else if (progress < 256 * 3) { g = 255;
              b = progress % 256;
          } else if (progress < 256 * 4) {
              r = progress % 256;
              g = 256 - progress % 256;
              b = 256 - progress % 256;
          } else if (progress < 256 * 5) {
              r = 255;
              g = 0;
              b = progress % 256;
          } else if (progress < 256 * 6) { r = 255;
              g = progress % 256;
              b = 256 - progress % 256;
          } else if (progress < 256 * 7) {
              r = 255;
              g = 255;
              b = progress % 256;
          }
          return Color.argb(255, r, g, b);
      }
  
  
   /**
       * @param color the color must be generated from  {@link ColorPickerSeekBar#getColorFromProgress(int)}
       */
      public void setProgressFromColor(int color) {
          int r = (color >> 16) & 0xff;
          int g = (color >> 8) & 0xff;
          int b = (color) & 0xff;
          int value = (255 << 24) | (r << 16) | (g << 8) | b;
          int progress[] = {
                  b
                  , 256 + g
                  , 256 * 2 + b
                  , 256 * 3 + r
                  , 256 * 4 + b , 256 * 5 + g
                  , 256 * 6 + b
          };
  
          for (int theProgress : progress) {
              int colorFromProgress = getColorFromProgress(theProgress);
              MyLog.e("colorFromProgress:" + colorFromProgress + " value:" + value+" theProgress:"+theProgress);
              if (colorFromProgress == value) {
                  setProgress(theProgress);
                  MyLog.e("hit theProgress:" +theProgress);
  
                  return;
              }
          }setProgress(MAX);//default white color
          MyLog.e("setProgress default:" +MAX);
  
      }
  ```
  
  

# OpenGL 画图篇

### OpenGL API V2

### 定义定点脚本和片段着色脚本

```java
 protected     String   vertexShaderCode   =
            "uniform mat4 uMVPMatrix;" +
                    "attribute vec4 a_position; " +
                    "attribute vec2 a_texCoord; " +
                    "varying vec2 v_texCoord; " +
                    "void main() " +
                    "{ " +
                    "gl_Position = uMVPMatrix * a_position; " +
                    "v_texCoord = a_texCoord; " +
                    "} ";

protected     String   fragmentShaderCode =
            "precision lowp float;  " +
                    "varying vec2 v_texCoord; " +
                    "uniform sampler2D u_samplerTexture; " +
                    "uniform float opacity;" +
                    "void main() " +
                    "{ " +
                    "vec4 color = texture2D(u_samplerTexture, v_texCoord).rgba;" +
                    "gl_FragColor = vec4(color.xyz, color.a * opacity); " +
                    "} ";
```

### 创建OpenGL脚本画图程序编译，然后链接程序

```java
 public static int loadShader(int shaderType, String source) {
        int shader = GLES20.glCreateShader(shaderType);
        GLES20.glShaderSource(shader, source);
        GLES20.glCompileShader(shader);
     	int[] compiled = new int[1];
        GLES20.glGetShaderiv(shader, GLES20.GL_COMPILE_STATUS, compiled, 0);
        if (compiled[0] == 0) {
            MyLog.e("Could not compile shader(TYPE=" + shaderType + "):");
            MyLog.e(GLES20.glGetShaderInfoLog(shader));
            GLES20.glDeleteShader(shader);
            shader = 0;
        }  
     return shader;
 }

 public static int createProgram(String vertexShaderCode, String fragmentShaderCode) {
       int vertexShader = loadShader(GLES20.GL_VERTEX_SHADER, vertexShaderCode);
       int fragmentShader = loadShader(GLES20.GL_FRAGMENT_SHADER, fragmentShaderCode);

        // create empty OpenGL ES Program
        int program = GLES20.glCreateProgram();
        // add the vertex shader to program
        GLES20.glAttachShader(program, vertexShader);
     // add the fragment shader to program
        GLES20.glAttachShader(program, fragmentShader);
        // creates OpenGL ES program executables
        GLES20.glLinkProgram(program);
        return program;
    }
```

### 创建水印纹理

```java
  public static int createTexture() {
        int[] textureIds = new int[1];
        GLES20.glGenTextures(1, textureIds, 0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, textureIds[0]);

        GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_LINEAR);
        GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_LINEAR);
        GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_S, GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexParameterf(GLES20.GL_TEXTURE_2D, GLES20.GL_TEXTURE_WRAP_T, GLES20.GL_CLAMP_TO_EDGE);
        return textureIds[0];
    }
```



### 计算水印坐标转换成openGL的坐标矩阵

```java
 protected     CoordinateUtils.CoordinatesF coordinatesF       = new CoordinateUtils.CoordinatesF(
            -1.0f, 1.0f,
            -1.0f, 1.0f);
/**
     * @param ratio
     * @return 自定义水印矩阵
     */
    private float[] calculateCustomWatermarkMatrix(float ratio) {
        this.coordinatesF.leftRatio = -ratio;
        this.coordinatesF.rightRatio = ratio;

        float[] scratch = new float[16];//最终的矩阵
        Matrix.frustumM(mProjectionMatrix, 0, -ratio, ratio, -1, 1, 3, 7);//视锥体  视景体的6个裁剪平面（左、右、底、顶、近和远）
        Matrix.setLookAtM(mViewMatrix, 0, 0, 0, 3, 0f, 0f, 0f, 0f, 1f, 0.0f);//eyeX eyeY eyeZ 0f, 0f, -3,    centerX centerY centerZ 0 0 0     upX upY upZ 0 1 0
        MyLog.e(Arrays.toString(mProjectionMatrix));//4 * 4 的矩阵
        MyLog.e(Arrays.toString(mViewMatrix));//4 * 4 的矩阵
        Matrix.multiplyMM(mMVPMatrix, 0, mProjectionMatrix, 0, mViewMatrix, 0);
        Matrix.setRotateM(mRotationMatrix, 0, mAngle, 0, 0, -1.0f);
        Matrix.multiplyMM(scratch, 0, mMVPMatrix, 0, mRotationMatrix, 0);
        return scratch;
    }
```

### 引用创建的OpenGL水印渲染脚本程序开始画图

```java
    // Use to access and set the view transformation 顶点着色器中的mMVPMatrix
    private       int                          mMVPMatrixHandle;
    private       int                          mPositionHandle;
    private       int                          mTexCoordHandle;
    private       int                          mTexSamplerHandle;
    private       int                          mOpacityHandle; 

    /**
     *
     * @param ratio         ratio = w * 1.0f / (h * 1.0f);
     * @param isPortrait
     */
public void draw(float ratio, boolean isPortrait) {
        this.isPortrait = isPortrait;
        GLES20.glUseProgram(mProgram);

        mPositionHandle = GLES20.glGetAttribLocation(mProgram, "a_position");
        mTexCoordHandle = GLES20.glGetAttribLocation(mProgram, "a_texCoord");
      	mMVPMatrixHandle = GLES20.glGetUniformLocation(mProgram, "uMVPMatrix");
        mTexSamplerHandle = GLES20.glGetUniformLocation(mProgram, "u_samplerTexture");
        mOpacityHandle = GLES20.glGetUniformLocation(mProgram, "opacity");

        float[] mvpMatrix = calculateCustomWatermarkMatrix(ratio);
        bindTexture2D(mvpMatrix, getBitmap(), getItemInfo().alpha);

    }
  private void bindTexture2D(float[] matrix, Bitmap bitmap, float mask_opacity) {
        FloatBuffer positionBuffer = getPositionBuffer(getItemInfo());//获取转换的坐标矩阵缓冲变量

        final int vertexCount = positionFloatArrCoordinate.length / COORDS_PER_VERTEX;
        final int vertexStride = COORDS_PER_VERTEX * 4; // 4 bytes per vertex

        GLES20.glActiveTexture(GLES20.GL_TEXTURE0);
        GLES20.glBindTexture(GLES20.GL_TEXTURE_2D, textureId);
      GLUtils.texImage2D(GLES20.GL_TEXTURE_2D, 0, bitmap, 0);
        GLES20.glUniform1f(mOpacityHandle, mask_opacity);


        GLES20.glEnableVertexAttribArray(mPositionHandle);
        GLES20.glEnableVertexAttribArray(mTexCoordHandle);

        GLES20.glUniform1i(mTexSamplerHandle, 0);
        GLES20.glUniformMatrix4fv(mMVPMatrixHandle, 1, false, matrix, 0);
       positionBuffer.position(0);
        GLES20.glVertexAttribPointer(mPositionHandle, COORDS_PER_VERTEX, GLES20.GL_FLOAT, false, vertexStride, positionBuffer);
        positionBuffer.position(3);
        this.textureBuffer.position(0);
        GLES20.glVertexAttribPointer(mTexCoordHandle, 2, GLES20.GL_FLOAT, false, 8, this.textureBuffer);
        this.drawOderBuffer.position(0);
      GLES20.glEnable(GLES20.GL_BLEND);
        GLES20.glBlendFunc(GLES20.GL_ONE, GLES20.GL_ONE_MINUS_SRC_ALPHA);
        GLES20.glDrawElements(GLES20.GL_TRIANGLES, drawOrder.length, GLES20.GL_UNSIGNED_SHORT, this.drawOderBuffer);
        GLES20.glDisable(GLES20.GL_BLEND);

        GLES20.glDisableVertexAttribArray(mPositionHandle);
        GLES20.glDisableVertexAttribArray(mTexCoordHandle);
    }

/**
     * 
     * @param itemEntity
     * @return FloatBuffer
     */
protected FloatBuffer getPositionBuffer(BaseWatermarkItemEntity itemEntity) {
        //  2019/8/16  width and centerX
        float widthRatio, heightRatio;
        if (isPortrait) {
            widthRatio = itemEntity.widthRatio;
            heightRatio = itemEntity.heightRatio;
        } else {
            int widthPixels = mContext.getResources().getDisplayMetrics().widthPixels;
            int heightPixels = mContext.getResources().getDisplayMetrics().heightPixels;
            int min = Math.min(widthPixels, heightPixels);
            int max = Math.max(widthPixels, heightPixels);
            float originWidth = itemEntity.widthRatio * min;
            float originHeight = itemEntity.heightRatio * max;
            widthRatio = originWidth / max;
            heightRatio = originHeight / min;
        }
     return transformCoordinate(
                new PointF(widthRatio, heightRatio)
                , new PointF(isPortrait ? itemEntity.vCenterX : itemEntity.hCenterX
                        , isPortrait ? itemEntity.vCenterY : itemEntity.hCenterY)
                , coordinatesF);
    }
  /**
     * this.positionFloatArrCoordinate
     *
     * @param widthHeightRatio
     * @param centerXY
     * @param coordinatesF
     * @return
     */
    protected FloatBuffer transformCoordinate(PointF widthHeightRatio, PointF centerXY, CoordinateUtils.CoordinatesF coordinatesF) {
        RectF rectF = getRectF(widthHeightRatio, centerXY, coordinatesF);//获取宽高在OpenGL坐标系中的坐标占比
        float left = rectF.left;
        float top = rectF.top;
        float right = rectF.right;
        float bottom = rectF.bottom;
           this.positionFloatArrCoordinate = new float[]{
                left, top, 0.0f,
                left, bottom, 0.0f,
                right, bottom, 0.0f,
                right, top, 0.0f};
        return createFloatBuffer(this.positionFloatArrCoordinate);
    }

/**
**创建缓冲变量
*/
  public static FloatBuffer createFloatBuffer(float[] fArr) {
        ByteBuffer allocateDirect = ByteBuffer.allocateDirect(fArr.length * 4);
        allocateDirect.order(ByteOrder.nativeOrder());
        FloatBuffer asFloatBuffer = allocateDirect.asFloatBuffer();
        asFloatBuffer.put(fArr);
        asFloatBuffer.position(0);
        return asFloatBuffer;
    }
```

# Open GL Android 知识

### [OpenGL ES](https://developer.android.google.cn/guide/topics/graphics/opengl?hl=en)

此链接的文档详细介绍了Android 如何使用OpenGL版本和如何转换坐标映射到屏幕，还有投影和相机视图矩阵变换来使得在手机屏幕上不会失真变形。

![image](https://developer.android.google.cn/images/opengl/coordinates.png)

**Figure 1.** Default OpenGL coordinate system (left) mapped to a typical Android device screen (right).

### [Displaying graphics with OpenGL ES](https://developer.android.google.cn/training/graphics/opengl?hl=en)

- **Build an OpenGL ES environment**

  Learn how to set up an Android application to be able to draw OpenGL graphics.

- **Define shapes**

  Learn how to define shapes and why you need to know about faces and winding.

- **Draw shapes**

  Learn how to draw OpenGL shapes in your application.

- **Apply projection and camera views**

  Learn how to use projection and camera views to get a new perspective on your drawn objects.

- **Add motion**

  Learn how to do basic movement and animation of drawn objects with OpenGL.

- **Respond to touch events**

  Learn how to do basic interaction with OpenGL graphics.

Additional sample code

To download NDK samples, see [NDK Samples](https://github.com/googlesamples/android-ndk/).

