const express = require('express');
const { getAllPosts, getPostById, createAPost } = require('../controllers/post')
const router = express.Router();

router.route('/')
                .get( getAllPosts)
                .post( createAPost)
  
router.route('/:id').get( getPostById)                








module.exports = router;
