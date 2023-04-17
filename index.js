const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

const generateReadMe = (title, description, githubUser, usage, email, installation, testInstructions, licenseLink, license) => {
  
  var badge = returnLicense(license);

  var licenseSection = generateLicenseSection(badge)




  
  return `
# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
${licenseLink}


## Description

  ${description}

${licenseSection}

## Installation

${installation}

## Usage

  ${usage}


## Tests

${testInstructions}

## Questions

If you have any additional questions or want to see some previous works of mine you can visit my github or contact me through email

  -GitHub Account: https://github.com/${githubUser}
  -Email: ${email}`
}


const generateLicenseSection = (badge) => {

  if(badge == ''){
    return ''
  } else {

    return `
## License
    
${badge}
    
    `
  }

}

const returnLicense = (license) => {

    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

        case 'Modzilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'

        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'

        case 'Open Commons Data':
            return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'

        case 'Perl':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'

        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

        case 'Boost':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

        case 'N/A':
            return ''
    }
}

var questions = [
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
        message: 'What do you need to install for project to function (If nothing write N/A)',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Give us a depiction of how to use your project:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Give instructions to use the test (If nothing then put N/A)',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license. If none are used then choose N/A',
        choices: ['MIT', 'Modzilla', 'ISC', 'Open Commons Data', 'Perl', 'Apache', 'Boost', 'N/A'],
      },
      
]

inquirer
    .prompt(questions)
    .then((answers) =>{
        var {projectTitle, description, githubUser, installation, usage, email, testInstructions, license} = answers;

        var licenseLink;

        if(license != 'N/A') {
          licenseLink = '- [License](#license)'
        } else {
          licenseLink = ''
        }

        var myReadMeGenerated = generateReadMe(projectTitle, description, githubUser, usage, email, installation, testInstructions, licenseLink, license)

        fs.writeFile('generated_readME.md', myReadMeGenerated, (err) => console.log(err))
    })