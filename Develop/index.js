// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'gitUser'
    },
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
        message: 'provide test instructions',
        name: 'test'
    },
    {
        type: 'input',
        message: 'for questions',
        name: 'question'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("data saved!")
    })
}

//write a handle answers func
const handleAnswers = (answers) => {
    console.log(answers);
    writeToFile('README.md', generateMarkdown(answers));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then(handleAnswers)
}

// Function call to initialize app
init();
