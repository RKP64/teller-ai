const mongoose = require("mongoose");

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *   schemas:
 *     Story:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier for the story.
 *         name:
 *           type: string
 *           description: The name of the story.
 *         summary:
 *           type: string
 *           description: A summary of the story.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the story was created.
 *         ageRange:
 *           type: string
 *           description: The age range for the story.
 *         prompt:
 *           type: string
 *           description: The prompt for the story.
 *         genre:
 *           type: string
 *           description: The genre of the story.
 *         scenarios:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Scenario'
 *
 *     Scenario:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *           description: The text of the scenario.
 *         image:
 *           type: string
 *           description: The image URL of the scenario.
 *
 *         voice:
 *           type: string
 *           description: The voice URL of the scenario.
 *
 *       example:
 *         text: Sample scenario text
 *         image: https://example.com/sample-image.jpg
 */

const scenarioSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  voice: {
    type: String,
    required: true,
  },
});

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ageRange: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  scenarios: [scenarioSchema],
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
