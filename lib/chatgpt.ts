import { Configuration, OpenAIApi } from "openai";
// import { OpenAIApi } from "openai/dist/api";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;
