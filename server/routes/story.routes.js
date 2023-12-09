const {
  createNewStory,
  getAllStories,
  getStoryById,
} = require("../controllers/story.controller.js");
const express = require("express");

const router = express.Router();

router.post("/", createNewStory);
router.get("/", getAllStories);
router.get("/:id", getStoryById);

module.exports = router;
