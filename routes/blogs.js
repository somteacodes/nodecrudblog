//blog routes

const express = require('express');
const router = express.Router();

router.get('/new', (request, response) => {
    response.send("this is the blogs router for new posts")
})



module.exports = router;