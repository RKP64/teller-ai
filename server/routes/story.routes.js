const { createNewStory } = require('../controllers/story.controller.js');
const express = require('express');

const router = express.Router(); 
 
router.post("/", createNewStory);

module.exports = router;