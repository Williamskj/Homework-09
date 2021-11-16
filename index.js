function init () {
    const fs = require('fs')
    const inquirer = require('inquirer')
    const generate = require('./generateMarkdown.js');
    const path = require('path');
    inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is a good Title for your project?"
            },
            {
                type: "input",
                name: "describe",
                message: "What is a good description for your project/application?"
            },
            {
                type: "input",
                name: "install",
                message: "How do you install your application?"
            },
            {
                type: "input",
                name: "use",
                message: "How do you use your application?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?",

            },
            {
                type: "input",
                name: "github",
                message: "What is your github username?"
            }
        ])
        .then(answer => {
            fs.writeFileSync(path.join(process.cwd(), 'README.md'), generate(answer)
            )
        })
        .catch(err => console.error(err))
};
init()
