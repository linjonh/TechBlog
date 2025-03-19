---
title: WSL的linux环境变量与Windows环境变量冲突解决Flutter程序
date: 2025-02-05 17:46:00 +08:00
author: 林建有
categories: ['Flutter', 'Cli', '环境变量']
tags: ['Cli']
render_with_liquid: false
featuredImage: https://bing.ee123.net/img/rand?artid=79949182
featuredImagePreview: https://bing.ee123.net/img/rand?artid=79949182
---

{:toc}
在 WSL 中，默认情况下会继承 Windows 的 `PATH`，这可能会导致一些软件（如 Flutter）在 Linux 环境中无法正常使用，或者优先使用了 Windows 版本的可执行文件，而不是 Linux 版本。你可以通过以下几种方式解决这个问题。
---
## **1. 直接查看 WSL 的 `PATH` 变量**
先确认 `PATH` 变量中是否包含 Windows 路径，并检查 Flutter 的路径顺序：
```sh
echo $PATH
which flutter
```
如果 `which flutter` 输出的是 Windows 版本的路径（如 `/mnt/c/...`），说明 WSL 仍然使用的是 Windows 的 Flutter。
---
## **2. 修改 WSL 配置文件**
WSL 允许你控制 Windows 路径是否被添加到 WSL 的 `PATH` 变量。你可以通过 `wsl.conf` 禁用这一行为。
### **方法 1：禁用 Windows 路径继承**
1. 编辑 `/etc/wsl.conf`（如果不存在就新建）：
```sh
sudo nano /etc/wsl.conf
```
2. 添加以下内容：
```ini
[interop]
appendWindowsPath = false
```
3. 关闭 WSL 并 **彻底重新启动 WSL**（不是 `exit`，而是重启 Windows 或运行以下命令）：
```powershell
wsl --shutdown
```
此方法会让 WSL **完全不继承** Windows 的 `PATH`，所有 Linux 进程都会只使用 Linux 路径。
---
### **方法 2：调整 `PATH` 变量的优先级**
如果你仍然希望在 WSL 中访问 Windows 程序，但希望 Linux 版本的 Flutter 先被使用，可以调整 `PATH`，让 Linux 版本的 Flutter 路径优先：
1. 在 `~/.bashrc` 或 `~/.zshrc` 里添加：
```sh
export PATH="$HOME/flutter/bin:$PATH"
```
2. 使更改生效：
```sh
source ~/.bashrc # 或者 source ~/.zshrc
```
3. 确保 Linux 版本的 Flutter 优先：
```sh
which flutter
```
你应该看到 `/home/youruser/flutter/bin/flutter`（Linux 版本）。
---
### **方法 3：手动移除 Windows `PATH`**
如果 WSL 中的 `PATH` 仍然包含 Windows 路径，你可以手动移除它：
```sh
export PATH=$(echo "$PATH" | tr ':' '\n' | grep -v '/mnt/c/' | tr '\n' ':')
```
这会去掉所有 `/mnt/c/...` 相关的路径。
如果效果合适，可以将这条命令添加到 `~/.bashrc` 或 `~/.zshrc` 里，确保每次启动 WSL 时生效。
---
## **3. 彻底移除 Windows 版本的 Flutter**
如果你不打算在 Windows 上使用 Flutter，可以直接删除 Windows 版本：
```powershell
scoop uninstall flutter
```
或者检查 `C:\flutter` 并删除相关目录。
---
## **4. 检查 `flutter doctor`**
在 WSL 中执行：
```sh
flutter doctor
```
确保 Flutter 识别的是 Linux 版本，而不是 Windows 版本。
---
## **总结**
- **推荐方法 1**（禁用 Windows `PATH` 继承）：适合不想让 Windows 影响 WSL 的用户。
- **推荐方法 2**（调整 `PATH` 优先级）：适合仍然希望访问 Windows 应用但优先使用 Linux 版本的 Flutter。
- **推荐方法 3**（手动移除 Windows `PATH`）：适合临时修复。
- **如果 Windows 版 Flutter 不再需要**，直接删除 Windows 版本。
你可以试试这些方法，看哪种最适合你的需求！ 🚀