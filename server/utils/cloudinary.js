const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'dpp5okdoo',
  api_key: '344925158149625',
  api_secret: 'Vb_g13GfhKgSJpZPRa0jJUJyjNQ',
});

module.exports = cloudinary;
