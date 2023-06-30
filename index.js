// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(__dirname, '/Samples/', fileName),generateMarkdown (data), (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },

    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },

    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Please write a short description about your project.',
      name: 'description',
    },
    
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    },
    {
      type: 'input',
      message: 'what command do you use to install dependencies?',
      name: 'dependency',
      default: 'npm install'
    },
    
    {
      type: 'input',
      message: 'what command do you use to tests?',
      name: 'test',
      default: 'npm run test',
    },
    
    {
      type: 'input',
      message: 'what does the user need to know about your repository?',
      name: 'repositoryInfo',
    },

    {
      type: 'input',
      message: 'what does the user need to know about contributing to your repository?',
      name: 'contribution',
    },
  ])
  .then(function(answers) {
    console.log(answers);
    writeToFile('README.md', answers);
  })
}

// Function call to initialize app
init();
