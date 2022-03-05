const inquirer = require("inquirer");
const cp = require('child_process');


function displayList() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            choices: ['About', 'Skills', 'Academics', 'Projects']
        }
    ])
        .then(function (ans) {
            if (ans.selection == ' About') {
                console.log("This is About section");
                displayNext();
            }
            else if (ans.selection == 'Skills') {
                console.log("Java,JavaScript,HTML,CSS,ML,DL,Solidity,C++,C#");
                displayNext();
            }
            else if (ans.selection == "Academics") {
                console.log("This is Academics Section");
                displayNext();
            }
            else if (ans.selection == "Projects") {
                cp.execSync("start chrome https://github.com/HardikxLabeitazer ")
                displayNext();
            }
        });
}
displayList();


function displayNext() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            choices: ['Go Back', 'Exit']
        }
    ]).then(function (ans) {
        if (ans.selection == 'Go Back') {
            displayList();
        }
        else if (ans.selection == 'Exit') {
            console.log("Resume Closed");
        }
    })
}
