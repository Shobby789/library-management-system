import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { booksAPi } from "../services/books/books.service";

const store = configureStore({
  reducer: {
    [booksAPi.reducerPath]: booksAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPi.middleware),
});

setupListeners(store.dispatch)

export default store;
