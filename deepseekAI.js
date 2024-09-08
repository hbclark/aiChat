import "dotenv/config";
import OpenAI from "openai";

const deepSeekAI = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: "https://api.siliconflow.cn/v1",
});

export default deepSeekAI;
