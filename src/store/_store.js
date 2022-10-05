import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app";
import { productsApi } from "./features/products";

const store = configureStore({
  reducer: {
    appReducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDM) => getDM().concat([productsApi.middleware]),
});

export default store;
