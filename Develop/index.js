// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

/* actually we dont't need inquirer if we are just using an array....
inquirer
    .createPromptModule([
    ])
*/
const questions = [
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'write a description for your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'write out each subject for your table of contents',
        name: 'TOC'
    },
    {
        type: 'input',
        message: 'provide your installation instructions',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'provide the proper usage for your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'provide the license you would like your project to function under',
        name: 'license'
    },
    {
        type: 'input',
        message: 'provide guidelines for contributing to your project',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'for test',
        name: 'test'
    },
    {
        type: 'input',
        message: 'for questions',
        name: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeInterior =
    `
        # ${fileName}

        ${data}

        # Description

        # Table of Contents

        # Installation

        # Usage

        # License

        # Contributing

        # Tests

        #Questions
    `;

    fs.writeFile(`fileName.json`, readmeInterior,
    (err) => {
        if (err) throw err;
        console.log("data saved")
    })
}

// TODO: Create a function to initialize app
function init(fileName, data) {
    writeToFile(fileName, data);
}

// Function call to initialize app
init();
