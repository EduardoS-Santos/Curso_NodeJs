//const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http.js");
require("./modules/express");

//person = new Person("Eduardo");

//console.log(person.sayMyName());
