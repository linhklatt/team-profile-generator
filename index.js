// bringing in inquirer
const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//employee = [{Manager}, {Engineer}, {Intern}]

const employeeArray = [];
// create a function that run a inquirer prompt question . then (()==> inquirer.prompt())
const addTeamManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter Manager's name!",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter Manager's ID!",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter Manager's email address!",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter Manager's office number!",
        name: "officeNumber",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      employeeArray.push(manager);
      console.log(manager);
    });
};
//endpoint = loop employee array = convert into html
