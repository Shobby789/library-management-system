const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookTitle: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    totalBooks: { type: Number, required: true },
    bookCoverImage: { type: String, required: true },
    bookImages: { type: Array, required: false },
    bookSummary: { type: String, required: true },
    bookPrimaryColor: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", bookSchema);
