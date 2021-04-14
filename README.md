# scribble_api

## Description

scribble_api is a RESTFUL API built for a simple notetaking app using:

- Node.js

- Express js

- MongoDB/Mongoose

## Routes

The API has the following *main* routes (endpoints): 

- /api/ corresponding to the index resource

- /api/sign-up corresponding to the sign-up resource

- /api/login corresponding to the login resource

- /api/users corresponding to the users resource

- /api/notes corresponding to the notes resource

## Operations available on the routes (endpionts):

- /api/ --> **GET**

- /api/sign-up --> **GET**, **POST**

- /api/login --> **GET**, **POST**

- /api/users --> **GET**, **POST**

- /api/users?*pageSize=size* --> **GET**, for customizing amount of users fetched from the database

- /api/users/id --> **GET**, **PUT**, **DELETE**, for respectively *getting*, *updating* and *deleting* a single user from the database using it's **id**

- /api/notes --> **GET**, **POST**

- /api/notes*pageSize=size* --> **GET**, for customizing amount of notes fetched from the database

- /api/notes/id --> **GET**, **DELETE**, for respectively *getting* and *deleting* a single note from the database using it's **id**

## Usage

To use this API for your project(s), perform the following steps: 

- clone this repo to your machine

- run **yarn install:* or :*npm install** to install the (dev)dependencies

- create a **.env** file and populate it with the following variables *DB_STRING*, *PORT* and *SECRET_KEY* 

- run **yarn dev** or **npm run dev**

- open up postman or a browser and visit http://localhost:PORT to test run the API

## License

**MIT**
