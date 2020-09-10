const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

//initialize slug
mongoose.plugin(slug);
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timeCreated: {
    type: Date,
    default: () => Date.now(),
  },
  img: {
    type: String,
    default: 'placeholder.jpg',
  },
  slug: { type: String, slug: 'title', unique: true, slug_padding_size: 2 },
});

module.exports = mongoose.model('Blog', blogSchema);
