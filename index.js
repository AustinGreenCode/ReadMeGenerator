var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

// questions
let questions = {
    type: "input",
    message: "What is the name of your repository?",
    name: "title"
}