fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require("util");
const writeFile = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the title for your project: ',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('A title for your project must be entered. Please enter the title for your project: ');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description for your project: ',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('A description for your project is required to continue. Please enter a description for your project: ');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projectInstallion',
        message: 'Please enter the required steps for your project installation (step-by-step instructions for installation): '
    },

    {
        type: 'input',
        name: 'projectVisual',
        message: 'Please provide a file path of a visual respresentation of your project (i.e. Screenshots or Videos): '
    },

    {
        type: 'input',
        name: 'projectTest',
        message: 'Please provide any tests you want included with your project: '
    },

    {
        type: 'input',
        name: 'projectContributors',
        message: 'Did anyone contribute to this project? If so, enter their credintials here: '
    },

    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your name here: ',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Your name is required. Please enter your name to continue: ');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'userEmail',
        message: 'Please enter your email: '
    },

    {
        type: 'input',
        name: 'userGitHub',
        message: 'Please enter your GitHub username: '
    },

    {
        type: 'checkbox',
        name: 'projectLanguages',
        message: 'What languages did you use to build this project? (You may check more than one if you used more than one): ',
        choices: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'ES6']
    },

    {
        type: 'list',
        name: 'projectLicense',
        message: 'Please pick a licenses:',
        choices: ['MIT', 'GPL', 'MPL', 'CC', 'Unlicense', 'BSL'],
    },
];

const promptUserResponse = () => {
    //for (const value of questions) {
       return inquirer.prompt(questions)
    
    .then(userResponse => {
        return generateMarkdown(userResponse);
    })
    .catch(err => {
        console.log(err);
    })
}

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, JSON.stringify(data))
// }

// function to initialize program
async function init() {
    try {
        const userResponse = await promptUserResponse();
        const generateReadMe = generateMarkdown(userResponse);

        await writeFile('./dist./README.md', generateReadMe);
        console.log('README is complete')
    }
    catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
