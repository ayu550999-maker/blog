---
title: "Mac常用开发命令速查表文档"
pubDate: "2026-06-01"
tags: ["技术", "博客"]
draft: false
---
# Mac 常用开发命令速查表

## 1. 文件和目录操作

### 查看当前目录

```bash
pwd
```

### 查看文件列表

```bash
ls
ls -l      # 详细信息
ls -la     # 包含隐藏文件
```

### 切换目录

```bash
cd 目录名
cd ..
cd ~       # 回到用户目录
```

### 创建目录

```bash
mkdir test
mkdir -p a/b/c
```

### 创建文件

```bash
touch test.txt
```

### 删除文件

```bash
rm test.txt
```

### 删除目录

```bash
rm -rf test
```

> ⚠️ `rm -rf` 删除后无法恢复，请谨慎使用。

---

# 2. 文件内容查看

### 查看文件内容

```bash
cat test.txt
```

### 分页查看

```bash
less test.txt
```

退出：

```bash
q
```

### 查看前10行

```bash
head -10 test.txt
```

### 查看后10行

```bash
tail -10 test.txt
```

### 实时查看日志

```bash
tail -f application.log
```

---

# 3. 文件搜索

### 查找文件

```bash
find . -name "*.java"
```

### 查找目录

```bash
find . -type d -name "src"
```

### 搜索文件内容

```bash
grep "taskCode" test.java
```

递归搜索：

```bash
grep -r "taskCode" .
```

---

# 4. 文件复制与移动

### 复制文件

```bash
cp a.txt b.txt
```

### 复制目录

```bash
cp -r source target
```

### 移动文件

```bash
mv a.txt test/
```

### 重命名文件

```bash
mv old.txt new.txt
```

---

# 5. 压缩与解压

### ZIP压缩

```bash
zip -r test.zip test/
```

### ZIP解压

```bash
unzip test.zip
```

### TAR.GZ压缩

```bash
tar -czvf test.tar.gz test/
```

### TAR.GZ解压

```bash
tar -xzvf test.tar.gz
```

---

# 6. 权限管理

### 查看权限

```bash
ls -l
```

示例：

```bash
-rwxr-xr-x
```

### 修改权限

```bash
chmod 755 start.sh
```

### 添加执行权限

```bash
chmod +x start.sh
```

执行脚本：

```bash
./start.sh
```

---

# 7. 进程管理

### 查看所有进程

```bash
ps -ef
```

### 查找Java进程

```bash
ps -ef | grep java
```

### 查看端口占用

```bash
lsof -i:8080
```

### 杀死进程

```bash
kill -9 PID
```

例如：

```bash
kill -9 12345
```

开发常用：

```bash
lsof -i:9095
kill -9 PID
```

---

# 8. 网络命令

### 查看IP地址

```bash
ifconfig
```

### 测试网络

```bash
ping www.baidu.com
```

### GET请求

```bash
curl http://localhost:8080/test
```

### POST请求

```bash
curl -X POST http://localhost:8080/test
```

---

# 9. Java开发常用命令

### 查看Java版本

```bash
java -version
```

### 查看Java安装路径

```bash
which java
```

### 查看JAVA_HOME

```bash
echo $JAVA_HOME
```

### 查看环境变量

```bash
echo $PATH
```

---

# 10. Maven命令

### 查看版本

```bash
mvn -version
```

### 编译项目

```bash
mvn clean compile
```

### 打包项目

```bash
mvn clean package
```

### 跳过测试打包

```bash
mvn clean package -DskipTests
```

---

# 11. Git命令

### 查看状态

```bash
git status
```

### 拉取代码

```bash
git pull
```

### 提交代码

```bash
git add .
git commit -m "提交说明"
git push
```

### 查看分支

```bash
git branch
```

### 切换分支

```bash
git checkout dev
```

---

# 12. Homebrew（Mac包管理器）

### 查看是否安装

```bash
brew -v
```

### 安装软件

```bash
brew install nginx
brew install mysql
brew install redis
brew install maven
```

### 搜索软件

```bash
brew search nginx
```

### 卸载软件

```bash
brew uninstall nginx
```

---

# 13. Java程序员必会命令（推荐收藏）

### 查看端口占用

```bash
lsof -i:9095
```

### 杀死端口对应进程

```bash
kill -9 PID
```

### 实时查看日志

```bash
tail -f logs/app.log
```

### 搜索Java文件

```bash
find . -name "*.java"
```

### 全局搜索代码

```bash
grep -r "taskCode" .
```

### Maven打包

```bash
mvn clean package -DskipTests
```

### Git提交代码

```bash
git add .
git commit -m "fix"
git push
```

---

# 常见快捷键

| 快捷键      | 功能      |
| -------- | ------- |
| Ctrl + A | 光标移动到行首 |
| Ctrl + E | 光标移动到行尾 |
| Ctrl + U | 删除光标前内容 |
| Ctrl + K | 删除光标后内容 |
| Ctrl + L | 清屏      |
| Ctrl + C | 终止当前命令  |
| Ctrl + R | 搜索历史命令  |
| Tab      | 自动补全    |
| ↑ ↓      | 查看历史命令  |

---

# 推荐安装工具

```bash
brew install git
brew install maven
brew install mysql
brew install redis
brew install nginx
brew install wget
brew install tree
brew install jq
```

查看目录树：

```bash
tree
```

格式化JSON：

```bash
cat test.json | jq
```

