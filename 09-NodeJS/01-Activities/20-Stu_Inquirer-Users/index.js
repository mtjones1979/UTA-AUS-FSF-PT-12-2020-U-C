const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    },
    {
    type: 'input',
    message: 'What languages do you know?',
    name: 'stack',
    
    },
    {
    type: 'input',
    message: 'What is your preferred method of communication?',
    name: 'speak',
    },

  ])
  .then((data) => {
    console.log(data);
    const filename = `${data.name.toLowerCase().split('').join('')}.json`;
    fs.appendFile('log.txt', `${data.name}\n, ${data.stack}\n ${data.speak}`), (err) =>
    err ? console.log(err) : console.log('Success!')
  });