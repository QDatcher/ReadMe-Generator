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
            name: 'description',
            message: 'Give us a description of your project:',
          },
          {
            type: 'input',
            name: 'githubUser',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What do you need to install for project to function (If nothing leave blank)',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Give us a depiction of how to use your project:',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Give us a description of your project:',
          },
    ])
    .then((data) =>{

    })