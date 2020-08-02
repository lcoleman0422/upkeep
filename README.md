# Social Media Endpoint challenge

>  This projects provides two users REST endpoints to be used in conjuction with a social media app. 

## Technologies 

- Node JS
- Express
- MySql

## Install and Use

Start by cloning this repository

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


## Folder Structure

This project has 4 main directories:

- api - for controllers, models, services, etc.
- config - for routes, database, etc.
- db - this is only a dir for the sqlite db, the default for NODE_ENV development
- test - using [Jest](https://github.com/facebook/jest)

## Routes 
```js
const userRoutes = {
  'GET /users': 'UserController.getUsers',
  'GET /user/:id/friends': 'UserController.getFriends',
};

```





