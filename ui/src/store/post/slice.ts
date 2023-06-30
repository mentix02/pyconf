import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Post, PostState } from "./types.ts";

const initialState: PostState = { posts: [] };

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    appendPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    extendPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = state.posts.concat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, appendPost, extendPosts } = postSlice.actions;

export default postSlice.reducer;
