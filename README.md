# 記帳本

運用 Express & MongoDB 打造的網頁，將平常的花費與開銷進行紀錄。

[Website](https://infinite-basin-38981.herokuapp.com)

## Picture

![畫面截圖](https://i.imgur.com/ofYLlLO.jpg)

## Environment SetUp

- [MongoDB](https://www.mongodb.com/download-center/community) - Database

* [Node.js](https://nodejs.org/en/) - JavaScript runtime built

- [Express](https://expressjs.com/zh-tw/starter/installing.html) - Node.js web framework

## Installing

###### 如何下載並啟動專案

打開終端機(Terminal)，啟動本地 MongoDB 資料庫

```
mongod --dbpath /Users/[user]/mongodb-data --bind_ip 127.0.0.1
```

再開啟另一個終端機(Terminal)，`Clone` 這個專案，完成後會顯示 Done 訊息

```
git clone https://github.com/asd8116/ExpensesRecord.git
```

從終端機導入目標檔案，並下載工具包

```
npm install
```

匯入種子檔案，並用 `ctrl + c` 結束匯入成功

```
node ./models/seeds/seeder.js
```

開啟本地伺服器。

```
node app.js
```

成功連結後，瀏覽器輸入 http://localhost:3000
網頁即可運行並執行動作。

## Register & Login

###### 有帳號後方可使用網頁功能

- 可進行一般帳密註冊
- 可用 Facebook 帳號快速註冊登入
- 可用 Google 帳號快速註冊登入
- 帳號或密碼錯誤時會出現警告
- Login or Logout 皆會有提示

## Features

###### 功能特點

- 可瀏覽全部的開支紀錄，並顯示總花費
- 用月份欄進行開支查找
- 用類別欄進行開支查找
- 點擊 `新增支出` 可填入新的開支紀錄
- 點擊 `修改` 可修改開支紀錄的資料
- 點擊 `刪除` 可移除開支紀錄的內容

## Contributor

[馬振壹 Wanaka](https://github.com/asd8116)
