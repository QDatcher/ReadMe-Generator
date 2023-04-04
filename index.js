const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
    ])