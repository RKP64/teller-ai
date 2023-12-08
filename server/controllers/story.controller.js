const openai = require("../utils/openai_api.js");

const createNewStory = async (req, res) => {
  const ageRange = req.body.ageRange;
  const prompt = req.body.prompt;
  const genre = req.body.genre;

  if (!ageRange || !prompt || !genre) {
    return res.status(400).send("Bad request");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-0613",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant that creates a story based on users' input. 
                You need to create 6 scenarios. 
                Every scenario needs to have 200-300 characters in text.
                Every scenario will be separated like this :
                Title: Title of that scenario
                TEXT
                ===
                Title: Title of that scenario
                TEXT
                ===
                Title: Title of that scenario
                TEXT
                ===
                Title: Title of that scenario
                TEXT
                ===
                Title: Title of that scenario
                TEXT
                ===
                Title: Title of that scenario
                TEXT
                ===`,
        },
        { role: "user", content: `Age: ${ageRange}` },
        { role: "user", content: `Genre: ${genre}` },
        { role: "user", content: `Prompt: ${prompt}` },
        { role: "assistant", content: "Generate scenario 2." },
        { role: "assistant", content: "Generate scenario 3." },
        { role: "assistant", content: "Generate scenario 4." },
        { role: "assistant", content: "Generate scenario 5." },
        { role: "assistant", content: "Generate scenario 6." },
      ],
    });

    console.log("OpenAI Response:", response);

    const regex = /Title: (.*?)\n(.*?)(?=\s*Title:|$)/gs;
    let match;
    const scenarios = [];

    while ((match = regex.exec(response.choices[0].message.content)) !== null) {
      const title = match[1].trim();
      const text = match[2].trim().replace(/\n===\s*$/, "");
      if (title && text) {
        scenarios.push({ title, text });
      }
    }

    console.log("Scenarios:", scenarios);

    return res.status(201).json(scenarios);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { createNewStory };
