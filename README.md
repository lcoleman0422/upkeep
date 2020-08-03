# Social Media Endpoint challenge

>  This projects provides two users REST endpoints to be used in conjuction with a social media app. 

## Technologies 

- Node JS
- Express
- MySql

## Install and Use

Download and install MySql server locally and create DB schema with the following credentials. Ensure that upKeep user has permissions to schema.
 
  ```js
  database: 'upKeep',
  username: 'upkeep_api',
  password: 'upKeep12',
  host: 'localhost',
  ```


Then clone this repository

```sh
# HTTPS
$ git clone https://github.com/lcoleman0422/upkeep.git
```

then

```sh
# cd into project root
$ yarn
# to use mysql
$ yarn add mysql2
# start the api
$ yarn start
```

or

```sh
# cd into project root
$ npm i
# to use mysql
$ npm i mysql2 -S
# start the api
$ npm start
```

Then open another terminal window and run 

```sh
$ node seed.js 
```


## Folder Structure

This project has 3 main directories:

- api - for controllers, models, services, etc.
- config - for routes, database, etc.
- db - this is only a dir for the sqlite db, the default for NODE_ENV development

## Routes 
```sh
GET /users' - returns list of users. Pagination requires both offset and limit query params to be passed
GET /users/:id/friends' - returns list of user friends - Requires id of user to be passed.  
```

## Test 
Navigate from any browser or any REST client (i.e Postman) to end point pass applicable params 

```sh
localhost:2017/users?limit={LIMIT}&offset={OFFSET}
replace limit and offset with your desired count for pagination or omit both for all users

localhost:2017/users/{:id}/friends 
replace id with number between 1-13. seed data has established friendships for the following userid's
[4,7,8,10]
```

To Run unit test run
```sh
$ npm test
```



