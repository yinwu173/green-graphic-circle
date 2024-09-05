const inquirer = require('inquirer');



// prompt questions for user to input: text, text color, shape, and shape color
const questions = [
    {
        type: "input",
        message: "Enter text (up to 3 characters):",
        name: "text",
    },
    {
        type: "input",
        message: "Enter your color keyword (OR a hexadecimal number):",
        name: "text-color",
    },
    {
        type: "list",
        message: "Choose your shape:",
        name: "shape",
        choices: [
            'circle',
            'triangle',
            'square',
        ]
    },
    {
        type: "input",
        message: "Enter your shape's color: input color keyword (OR a hexadecimal number)",
        name: "shape-color",
    }
];