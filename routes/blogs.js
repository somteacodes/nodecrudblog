//blog routes

const express = require('express');
const Blog = require('./../models/Blog');
const router = express.Router();

router.get('/new', (request, response) => {
  response.render('new');
});

//view route
router.get('/:id', async (request, response) => {
  response.send(request.params.id);
});
//route that handles new post
router.post('/', async (request, response) => {
  // console.log(request.body);
  let blog = new Blog({
    title: request.body.title,
    author: request.body.author,
    description: request.body.description,
  });

  try {
    blog = await blog.save();

    response.redirect(`blogs/${blog.id}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
