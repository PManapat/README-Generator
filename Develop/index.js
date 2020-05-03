//Prompt the user with questions
const inquirer = require("inquirer");
//Writes file
const fs = require("fs");

const axios = require("axios");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "version",
    message: "Which version is this?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Details on how to install your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "license",
    message: "Do you have a license for your project? If yes, please state.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What testing have been completed?",
  },
  {
    type: "input",
    name: "questions",
    message: "What are some frequently asked questions?",
  },
];

inquirer.prompt(questions).then(function (answers) {
  console.log(answers);
  const username = answers.username;
  const queryUrl = `https://api.github.com/users/${username}`;

  const title = answers.title;
  const version = answers.version;
  const description = answers.description;
  const installation = answers.installation;
  const usage = answers.usage;
  const license = answers.license;
  const tests = answers.tests;
  const contributions = answers.contribution
  const questions = answers.questions;
  const badge = answers.verison;

  axios.get(queryUrl).then(function (res) {
    console.log(title);
    console.log(version);
    console.log(description);

    const avatarURL = res.data.avatar_url;
    const avatar = "![Avatar](" + avatarURL + ")";
    console.log(avatar);

    const header =
      "# README \n \n" +
      
      //username
      "### Github User: " + username + "\n \n" +
      
      //email
      "### Email: " + res.data.email + "\n \n" +
      
      //badge
      `![badge image](https://img.shields.io/static/v1?label=Version&message=` + version + `&color=<COLOR>) \n \n` +
      
      //profile image
      avatar + "\n \n";
      
      //start body
       const body = " # Information about the Repository \n \n" +
       
      //Project title
      "## Project Title: \n \n" + title + "\n \n" +
      
      //Description
      "## Description: \n \n" + description + "\n \n" +
      
      //Install
      "## Installation: \n \n" + installation + "\n \n" +
    
      //Usage
      "## Usage: \n \n" + usage + "\n \n" +
    
      //License
      "## License: \n \n " + license + "\n \n" +
    
      //Contributions
      "## Contributions: \n \n" + contributions + "\n \n" +
    
      //Testing
      "## Testing: \n \n" + tests + "\n \n" +
    
      //F.A.Q.s
      "## Frequently Asked Questions: \n \n" + questions + "\n \n";

    var document = header.concat("\n", body);
    fs.writeFile("README2.md", document, function (err) {
      if (err) {
        throw err;
      }
    });
  });
});

function writeToFile(fileName, data) {}

function init() {}

init();
