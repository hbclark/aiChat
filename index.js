import deepSeekAI from "./deepseekAI.js";

const result = await deepSeekAI.chat.completions.create({
  model: "deepseek-ai/DeepSeek-V2-Chat",
  messages: [{ role: "user", content: "Hello world" }],
});

console.log(result.choices);

// OpenAI 官方
// const openai = new OpenAI();
// const result = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [{ role: "user", content: "Hello world" }],
// });

// console.log(result);
