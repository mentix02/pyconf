import { useSelector } from "react-redux";

import { RootState } from "../index.ts";

export const useComments = () =>
  useSelector((state: RootState) => state.comment).comments;

export const usePost = () =>
  useSelector((state: RootState) => state.comment).post;
