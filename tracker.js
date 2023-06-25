const mysql = require('mysql');
const inquirer = require("inquirer");
const table = require("console.table");

//connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "123Pass!",
    database: "work_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});