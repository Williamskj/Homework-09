const fs = require('fs')
const inquirer = require('inquirer')

const profile = () => {
    return(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your current occupation?"
        },
        {
            type: "input",
            name: "age",
            message: "How old are you?"
        },
        {
            type: "input",
            name: "job",
            message: "What job do you want to have?"
        },
        {
            type: "list",
            name: "mastery",
            message: "how would you describe your current knowledge base?",
            choices: [
                "where the hell am I",
                "some of this looks familiar",
                "I understand the concepts",
                "I can apply what I know and build a functioning program",
                "How do I not have a job already?"
            ]
        }
    ])
    )
};
const generatehtml = ({name, title, age, job, mastery}) => {
     `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
    <h1 class="profile">${name}</h1>
    <div class="profile">${title}</div>
    <div class="profile">${age}</div>
    <div class="profile">${job}</div>
    <div class="profile">${mastery}</div>
    <script type="text/javascript" src="index.js"></script>
    </body>
    </html>  
`;}
const init = () => {
    profile()
    .then ( answer => {fs.writeFileSync('index.html', generatehtml(answer).toString()
)})
.catch(err => console.error(err))
}
init()