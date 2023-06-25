const mysql = require('mysql2');
const inquirer = require("inquirer");
// const table = require("console.table");

//connection to database 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123Pass!",
    database: "work_db"
});
// Port connection 
const PORT = process.env.PORT || 3001;

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});

//inquirer prompt: what would you like to do? 
function askQuestions() {
    inquirer.prompt({
        message: "what would you like to do?",
        type: "list",
        choices: [
            "view all employees",
            "view all departments",
            "add employee",
            "add department",
            "add role",
            "update employee role",
            "QUIT"
        ],
        name: "choice"
    })
}