// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
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
      name: 'project name',
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
      message: 'what command do you use to install dependencies? (npm install)',
      name: 'dependency',
    },
    
    {
      type: 'input',
      message: 'what command do you use to tests? (npm run test)',
      name: 'test',
    },
    
    {
      type: 'input',
      message: 'what does the user need to know about your repository?',
      name: 'repository info',
    },

    {
      type: 'input',
      message: 'what does the user need to know about contributing to your repository?',
      name: 'Contribution',
    },
  ])
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.readFile('README.md', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data))

  fs.writeFile('README.md', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
