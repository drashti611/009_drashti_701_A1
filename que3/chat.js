function getReply(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput.includes("hello") || userInput.includes("h1")) {
    return "hello! How can i Assist You Today??";
  }
  if (userInput.includes("How are You?")) {
    return "I am fine! What about you?";
  }
  if (userInput.includes("bye") || userInput.includes("exit")) {
    return "Goodbye! Have a greate day!";
  }
  return "sorry, I don't understand that. can you ask something else?";
}
module.exports = getReply;
