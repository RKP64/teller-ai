const openai = require("../utils/openai_api.js");
const Story = require("../models/Story.js");

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
                  Story which you generate needs to have its name.
                  Separate it like this :
                  Story name: NAME OF STORY
                  Story which you generate needs to have its summary.
                  Summary: SUMMARY
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

    // Extract story name and summary
    const nameMatch = response.choices[0].message.content.match(
      /Story name: (.*?)(?=\n)/
    );
    const summaryMatch =
      response.choices[0].message.content.match(/Summary: (.*?)(?=\n)/);

    const storyName = nameMatch ? nameMatch[1].trim() : "Your Story Name";
    const storySummary = summaryMatch
      ? summaryMatch[1].trim()
      : "Your Story Summary";

    const regex = /Title: (.*?)\n(.*?)(?=\s*Title:|$)/gs;
    let match;
    const scenarios = [];

    while ((match = regex.exec(response.choices[0].message.content)) !== null) {
      const title = match[1].trim();
      const text = match[2].trim().replace(/\n===\s*$/, "");
      if (title && text) {
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt: text,
          n: 1,
          size: "1792x1024",
          quality: "hd",
        });
        console.log(response);

        scenarios.push({ title, text, image: response.data[0].url });
      }
    }

    const newStory = new Story({
      name: storyName,
      summary: storySummary,
      ageRange,
      prompt,
      genre,
      scenarios,
    });

    const savedStory = await newStory.save();

    console.log("Saved Story:", savedStory);

    return res.status(201).json(scenarios);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { createNewStory };
