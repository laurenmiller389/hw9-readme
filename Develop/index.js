// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

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

    fs.writeFile(`fileName.json`, readmeInterior, utf8, (err) => {
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
