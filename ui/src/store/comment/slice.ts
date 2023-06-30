import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Post } from "../post/types.ts";
import type { Comment, CommentState } from "./types.ts";

const initialState: CommentState = { comments: [] };

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;
    },
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    appendComment: (state, action: PayloadAction<Comment>) => {
      if (state.post) state.post.comment_count++;
      state.comments.unshift(action.payload);
    },
    extendComments: (state, action: PayloadAction<Comment[]>) => {
      if (state.post) state.post.comment_count += action.payload.length;
      state.comments = state.comments.concat(action.payload);
    },
  },
});

export const { setPost, setComments, appendComment, extendComments } =
  commentSlice.actions;

export default commentSlice.reducer;
