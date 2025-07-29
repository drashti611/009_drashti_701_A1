const readline = require("readline");
const getReply = require("./chat");
const r1 = readline.createInterface({
  input: process.stdin,
  output : process.stdout
});
function askQuetion() {
    r1.question('You: ',(answer)=>{
        const response = getReply(answer);
        console.log('Bot:',response);
        if (answer.toLowerCase().includes('bye')|| answer.toLowerCase().includes('exit')) {
            r1.close();
        }
        else{
            askQuetion();
        }
    })
    
}
console.log('chatbot Started.. Type your messages below::');
askQuetion();