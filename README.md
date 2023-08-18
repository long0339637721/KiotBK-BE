# KiotBK BE

## Description
  Use mysql and nodejs
## How to install
  ### Create database and insert data to database
    - Create database: kiotbk.sql
    - Insert data: init.sql
  ### Create file .env that contains:
    - DB_HOST = localhost
    - DB_USER = root
    - DB_PASSWORD = (your password)
    - DB_DATABASE = KIOTBK
  ### Install node modules
    - npm i
## How to run
  - npm start
  - Open: http://localhost:5000/

# Note
 - src/config: chứa các file cấu hình sever
 - src/routes: định nghĩa các route
 - src/models: chứa các model tương ứng với các bảng trong DB
 - src/controllers: xử lý logic và truy vấn DB
 - src/views: giao diện hiển thị cho người dùng