const fs = require("fs");
const inquirer = require("inquirer");
const empGen = require("./lib/employee");
const engGen = require("./lib/engineer");
const intGen = require("./lib/intern");
const manGen = require("./lib/manager");

function init(){
    inquirer
    .prompt([{
        type: "input",
        message: "Please enter your name!",
        name: "name"
    },
    {
        type: "number",
        message: "Please enter your id!",
        name: "id"
    },
    {
        type: "email",
        message: "Please enter your email!",
        name: "email"
    },
    {
    type: "list",
    message: "Please enter your role!",
    name: "role",
    choices: ["Engineer", "Employee", "Intern"]
    }])
    .then

}
init();