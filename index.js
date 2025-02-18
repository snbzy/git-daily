const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');
const git = simpleGit();

// 获取当前日期
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 将当前日期添加到 logs 文件
const appendToLogs = (logFilePath) => {
  const date = getCurrentDate();
  fs.appendFileSync(logFilePath, `Date: ${date}\n`, 'utf8');
};

// 提交更改
const commitChanges = async () => {
  const logFilePath = path.join('./logs.txt', 'logs');

  try {
    // 将当前日期写入 logs 文件
    appendToLogs(logFilePath);
    console.log(`Appended date to ${logFilePath}`);

    // 使用 simple-git 提交更改
    await git.add(logFilePath);
    await git.commit(`Update logs with date: ${getCurrentDate()}`);
    await git.push('origin', 'main'); // 默认推送到 main 分支

    console.log('Changes committed and pushed to GitHub');
  } catch (err) {
    console.error('Error during commit and push:', err);
  }
};

// 执行提交操作
commitChanges();
