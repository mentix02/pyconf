import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postReducer from "./post/slice.ts";
import alertReducer from "./alert/slice.ts";
import commentReducer from "./comment/slice.ts";

export const store = configureStore({
  reducer: combineReducers({
    post: postReducer,
    alert: alertReducer,
    comment: commentReducer,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
