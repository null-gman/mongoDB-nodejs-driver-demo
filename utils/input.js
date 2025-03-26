const readline = require('node:readline');

const std = {input : process.stdin,output:process.stdout}


function input(msg = "") {
    const RL = readline.createInterface(std);
    RL.setPrompt(msg);
    RL.prompt(msg);

    return new Promise((resolve) => {
        RL.on("line",(value = "")=>{
                resolve(value);
                RL.close();
        })
    })
}


module.exports = input;
