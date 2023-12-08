const openai = require("../utils/openai_api.js");
const logger = require("../utils/logger.js");

const createNewStory = (req, res) =>{
    const ageRange = req.body.ageRange;
    const prompt = req.body.prompt;
    const genre = req.body.genre;

    if(!ageRange || !prompt || !genre) 
        return res.status(400).send("Bad request");

    try {
        throw "e";
    } catch(error) {
        logger.log(error);
        return res.status(500).send("Internal server error");
    }
}

module.exports = { createNewStory };