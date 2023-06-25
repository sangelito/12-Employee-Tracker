const mysql = require('mysql2');
const inquirer = require("inquirer");
// const table = require("console.table");

//connection to database 
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123Pass!",
    database: "work_db"
},
// console.log(`Connected to the work_bd database.`)
);
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
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "view all employees":
                viewEmployees()
                break;

            case "view all departments":
                viewDepartments()
                break;

            case "add employee":
                addEmployee()
                break;

            case "add department":
                addDepartment()
                break;

            case "add role":
                addRole()
                break;

            case "update employee role":
                updateEmployeeRole();
                break;

            default:
                connection.end()
                break;
        }
    })
}

//view employees
function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

//view departments 
function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

//function to add employees 
function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            askQuestions();
        })
    })
}

// add department function and prompts
function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            askQuestions();
        })
    })
}
// add role function and prompt 
function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        askQuestions();
    })

}