const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 10,
};

async function generateAIFlashCard(prompt) {
  const prompt1 = `You are a helpful flashcards. Create a pack name and multiple questions and answers for flashcards based on the following prompt. Return result like this {
      packName:"pack name",
      flashCards:[
        {
          question:"question1",
          answer:"answer1"
        },
        {
          question:"question2",
          answer:"answer2",
        }
      ]
    }. i want like this only and only like this.`;
  const result = await model.generateContent(
    prompt1 + prompt,
    generationConfig
  );
  let response = result.response.text();
  response = response.substring(6, -3);
}
module.exports = { generateAIFlashCard };
