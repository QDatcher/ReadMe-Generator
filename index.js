const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = (title, description, usage, installation,testInstructions, licenseLink, license) => {
    return `
    # ${title}

    ## Description
    
        ${description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)
    ${licenseLink}
    
    ## Installation
    
        ${installation}

    ## Usage
    
        ${usage}
    
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
    Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    If your project has a lot of features, list them here.
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    ## Tests
    
    ${testInstructions}
    
    ## Questions
    
    If you have any additional questions or want to see some previous works of mine you can visit my github or contact me through email
    
        -GitHub Account: https://github.com/${githubUser}
        -Email: ${email}`
}

const returnLicense = (license) => {

    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Modzilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
            break;
        case 'Open Commons Data':
            return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
            break;
        case 'Perl':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            break;
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'Boost':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            break
        case 'N/A':
            return ''
            break
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
        message: 'What do you need to install for project to function (If nothing leave blank)',
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
        message: 'Give instructions to use the test',
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
        var badge = returnLicense(license);
        var licenseLink;



    })