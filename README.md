# Building a SPE web application

## Introduction

This guide provides a step-by-step approach to building a my Single Pair Ethernet E-learning web application. 
## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- PHP
- Composer
- Node.js
- NPM
- Docker 

## Steps

### 1. Install PHP

Start by installing PHP, Composer, follow steps:

- PHP - <https://www.geeksforgeeks.org/how-to-install-php-in-windows-10/>'
- Node, npm - <https://nodejs.org/en/download>

### 2. Install Composer

Follow steps:

- <https://getcomposer.org/download/>

After installation rerun terminal and run, you should see output about version of Composer

```sh
composer -v
```

### 3. Update php.ini file

Click on windows search icon and type ```php.ini```. Open the file and uncomment these extensions

```sh
extension=fileinfo
extension=gd
extension=pdo_mysql
extension=pdo_odbc
extension=pdo_pgsql
extension=pdo_sqlite
extension=pgsql
extension=zip
```

### 4. Update/Install Composer dependencies

First try to run composer install to install the dependencies, if it failed run update first

```sh
composer install
```

```sh
composer update
```

## Users with credentials

| name       | email             | password | admin |
|------------|-------------------|----------|-------|
| John Doe   | user1@example.com | password | false |
| Jane Doe   | user2@example.com | password | false |
| Admin      | admin@example.com | Admin1234| true  |

## Run project


#### 2. Run install command for frontend and build the frontend


```sh
npm run install
npm run build
```

#### 3. Run migrations + seeders with running container with MySQL

```sh
php artisan migrate
php artisan db:seed

```

#### 4. Change your .env for your own mysql databse, or use SQLite (this is current settings)

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=speApp
    DB_USERNAME=root
    DB_PASSWORD=root

Idk if this is needed but i have to done it before running the application

```sh
php artisan key:generate
```

### 3. Run migrations and seeders

```sh
php artisan migrate
php artisan db:seed
```

### 4. Build and run the frontend

```sh
npm run install
```

### 5. Run Laravel application

```sh
php artisan serve
npm run dev
```
