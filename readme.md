1. 安装所需依赖
首先，确保你已经安装了 Node.js 和 Git。

在项目根目录下，初始化一个 Node.js 项目并安装 simple-git（Git 操作库）。

```
npm init -y
npm install simple-git
```
2.  设定 Git 配置
确保你已经配置了 GitHub 仓库，并且已经设置了 Git 的用户信息（如邮箱、用户名）。

```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
在本地克隆 GitHub 仓库 git-daily：

```
git clone https://github.com/yourusername/teneo-farm.git
cd teneo-farm
```
3. 设置 cron 任务
为了每天运行该脚本，可以使用 cron 来定时执行脚本。下面是设置 cron 的步骤：

打开 cron 编辑器：

```
crontab -e
```
添加定时任务：
假设你希望每天的某个时间（比如每天晚上 10 点）执行脚本，可以在 cron 编辑器中添加以下任务：


```
0 22 * * * /usr/bin/node /path/to/your/repo/git-daily/index.js
```
此任务会在每天晚上 10 点执行 daily_commit.js 脚本。

记得将 /path/to/your/repo/teneo-farm/ 替换成你实际项目的路径。

保存并退出：按 Ctrl + X，然后按 Y 保存并退出。

4. 测试
你可以通过手动执行脚本来验证是否正常工作：

```
node /path/to/your/repo/git-daily/index.js
```
执行后，你的 logs 文件中应该会新增一行当前日期，并且更改会被提交到 GitHub。