const Book = require("../models/Book");
const cloudinary = require("../utils/cloudinary");
const BorrowRequests = require("../models/borrowRequests");

const createBook = async ({
  bookTitle,
  author,
  genre,
  totalBooks,
  bookCoverImage,
  bookImages,
  bookSummary,
  bookPrimaryColor,
}) => {
  const existingBook = await Book.findOne({ bookTitle });
  const existinGenre = await Book.findOne({ genre });

  if (existingBook)
    throw new Error(`Book already exists with title ${bookTitle}`);
  if (genre?.length !== 8) {
    throw new Error("Genre must contain 8 digits");
  } else if (existinGenre) {
    throw new Error(`Book already exists with genre ${existinGenre}`);
  }

  const uploadCoverImage = await cloudinary.uploader.upload(
    `data:${bookCoverImage.mimetype};base64,${bookCoverImage.buffer.toString(
      "base64"
    )}`,
    {
      folder: "book_cover_images",
    }
  );

  const uploadBookImages = await Promise.all(
    bookImages.map(async (img) => {
      const res = await cloudinary.uploader.upload(
        `data:${img.mimetype};base64,${img.buffer.toString("base64")}`,
        {
          folder: "book_images",
        }
      );
      return res.secure_url;
    })
  );

  const book = await Book.create({
    bookTitle,
    author,
    genre,
    totalBooks,
    bookCoverImage: uploadCoverImage.secure_url,
    bookImages: uploadBookImages,
    bookSummary,
    bookPrimaryColor,
  });

  return {
    message: "Book added successfully",
    data: {
      bookTitle: book.bookTitle,
      author: book.author,
      genre: book.genre,
      totalBooks: book.totalBooks,
      bookCoverImage: book.bookCoverImage,
      bookImages: book.bookImages,
      bookSummary: book.bookSummary,
      bookPrimaryColor: book.bookPrimaryColor,
    },
  };
};

const getBooks = async () => {
  const books = await Book.find();
  return books;
};

const getBook = async (bookId) => {
  const book = await Book.findById({ _id: bookId });
  return book;
};

const editBook = async (
  bookId,
  {
    bookTitle,
    author,
    genre,
    totalBooks,
    bookCoverImage,
    bookImages,
    bookSummary,
    bookPrimaryColor,
  }
) => {
  const book = await Book.findById(bookId);
  if (!book) {
    throw new Error("Book not found!");
  }

  if (bookTitle) {
    const existingBook = await Book.findOne({
      bookTitle,
      _id: { $ne: book._id },
    });
    if (existingBook) {
      throw new Error(`Another book exists with title "${bookTitle}"`);
    }
    book.bookTitle = bookTitle;
  }

  if (genre && genre !== book?.genre) {
    if (genre.length !== 8) {
      throw new Error("Genre must contain 8 digits");
    }

    const existingGenre = await Book.findOne({ genre, _id: { $ne: book._id } });
    if (existingGenre) {
      throw new Error(`Another book already exists with this genre ${genre}`);
    }

    book.genre = genre;
  }

  if (author) book.author = author;
  if (totalBooks) book.totalBooks = totalBooks;
  if (bookSummary) book.bookSummary = bookSummary;
  if (bookPrimaryColor) book.bookPrimaryColor = bookPrimaryColor;
  if (!bookCoverImage) {
    throw new Error("Book cover image is required");
  }
  if (bookCoverImage) {
    const uploadedCover = await cloudinary.uploader.upload(
      `data:${bookCoverImage.mimetype};base64,${bookCoverImage.buffer.toString(
        "base64"
      )}`,
      {
        folder: "book_cover_images",
      }
    );

    book.bookCoverImage = uploadedCover.secure_url;
  }

  if (bookImages && bookImages.length > 0) {
    const uploadedImages = await Promise.all(
      bookImages?.map(async (img) => {
        const res = await cloudinary.uploader.upload(
          `data:${img.mimetype};base64,${img.buffer.toString("base64")}`,
          {
            folder: "book_images",
          }
        );
      })
    );

    book.bookImages = uploadedImages;
  }

  await book.save();

  return {
    message: "Book updated successfull",
    data: {
      bookTitle: book.bookTitle,
      author: book.author,
      genre: book.genre,
      totalBooks: book.totalBooks,
      bookCoverImage: book.bookCoverImage,
      bookImages: book.bookImages,
      bookSummary: book.bookSummary,
      bookPrimaryColor: book.bookPrimaryColor,
    },
  };
};

const requestBorrowBook = async (userId, bookId, dueDate) => {
  try {
    const existingRequest = await BorrowRequests.findOne({
      user: userId,
      book: bookId,
      status: { $in: ["Pending", "Borrowed"] },
    });

    if (existingRequest) {
      throw new Error(
        `You already have a pending or borrowed request for this book.`
      );
    }

    const borrowRequest = await BorrowRequests.create({
      user: userId,
      book: bookId,
      status: "Pending",
      borrowedDate: null,
      dueDate: dueDate,
      returnDate: null,
    });

    borrowRequest.save();

    return borrowRequest;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateRequestStatus = async (requestId, status) => {
  const request = await BorrowRequests.findById(requestId);
  if (!request) {
    throw new Error("Request not found!");
  }

  // const updateFields = { status };
  const currentDate = new Date();

  switch (status) {
    case "Borrowed":
      request.borrowedDate = currentDate;
      break;

    case "Returned":
      request.returnDate = currentDate;
      break;

    case "Rejected":
      request.borrowedDate = null;
      request.returnDate = null;
      break;

    case "Pending":
      request.borrowedDate = null;
      request.returnDate = null;
      break;

    default:
      throw new Error("Invalid status update");
  }

  const updatedRequest = await BorrowRequests.findByIdAndUpdate(
    requestId,
    { status },
    { new: true }
  );

  return updatedRequest;
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  editBook,
  requestBorrowBook,
  updateRequestStatus,
};
