const {
  createNewStory,
  getAllStories,
} = require("../controllers/story.controller.js");
const express = require("express");

const router = express.Router();

router.post("/", createNewStory);
router.get("/", getAllStories);

module.exports = router;
