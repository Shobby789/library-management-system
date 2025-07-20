// services/books/books.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../api/api";

export const booksAPi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/add-book`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// ✅ Make sure you're importing from the right place
export const { useGetBooksQuery, useGetBookByIdQuery, useAddBookMutation } =
  booksAPi;
