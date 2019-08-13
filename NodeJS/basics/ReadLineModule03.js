const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) ;

let num1 = Math.round((Math.random()+20));
let num2 = Math.round((Math.random()+20));

console.log(num1);
console.log(num2);

let answer = num1 + num2;
rl.question(`What is the sum of ${num1} + ${num2}?\n`, (userInput) => {
    if(parseInt(userInput) === answer) {
        rl.close();
    } else {
        rl.setPrompt("Sorry wrong answer \n");
        rl.prompt();
        rl.on("line", (userInput) => {
            if(parseInt(userInput) === answer) {
                rl.close();
            } else {
                rl.setPrompt(`Again ${userInput} is wrong, try again`);
                rl.prompt();
            }
        });
    }
})

rl.on("close", () => {
    console.log("You are correct");
})