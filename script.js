// Array of questions
let questions = [
    "What is a callback in JavaScript?",
    "What is a Promise in JavaScript?",
    "What does asynchronous mean in JavaScript?",
    "What is the ternary operator syntax in JavaScript?",
    "What is async/await in JavaScript?"
];

// Shuffle the questions array
questions.sort(() => Math.random() - 0.5);

// Display all questions
console.log("Your randomly selected questions are:");
questions.forEach((question, index) => {
    console.log(`${index + 1} ${question}`);
});

// Exit the program
process.exit();