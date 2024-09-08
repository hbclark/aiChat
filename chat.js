import deepSeekAI from "./deepseekAI.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newMessage = async (history, message) => {
  const results = await deepSeekAI.chat.completions.create({
    model: "deepseek-ai/DeepSeek-V2-Chat",
    messages: [...history, message],
  });
  return results.choices[0].message;
};

const formatMessage = (userInput) => ({ role: "user", content: userInput });

const chat = () => {
  const history = [
    {
      role: "system",
      content: "You are an AI assistant.Answer questions and help with tasks.",
    },
  ];

  const start = () => {
    rl.question("you:", async (userInput) => {
      if (userInput.toLowerCase() === "exit") {
        rl.close();
        return;
      }
      const message = formatMessage(userInput);
      const response = await newMessage(history, message);
      history.push(message, response);
      console.log(`\n\nAI:${response.content}`);
      start();
    });
  };
  console.log("Welcome to the chat! Type 'exit' to leave the chat.");
  start();
};
chat();
