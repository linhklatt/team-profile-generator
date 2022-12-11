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
        message: "What is the team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team manager's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team manager's office number!",
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

const addTeamMembers = () => {
  console.log(
    "Adding Employee to the Team Member",
    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  );
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "role",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add any more team member",
        ],
      },
      {
        type: "input",
        message: "Please enter team member's name!",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter team member's id!",
        name: "email",
      },

      {
        type: "input",
        message: "Please enter employee's email!",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter team member's github username",
        name: "github",
      },
      {
        type: "input",
        message: "Please enter intern's school",
        name: "github",
      },
      {
        type: "confirm",
        message: "Would you like to add more employees?",
        name: "confirmAddEmployee",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, github);
        console.log(employee);
      } else if (role === "I do not want to add any more team member") {
        console.log(employeeArray);
        return employeeArray;
      }
      employeeArray.push(employee);

      if (confirmAddEmployee) {
        return addTeamMembers(employeeArray);
      } else {
        return employeeArray;
      }
    });
};
//endpoint = loop employee array = convert into html
