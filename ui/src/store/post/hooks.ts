import { useSelector } from "react-redux";

import { RootState } from "../index.ts";

export const usePosts = () =>
  useSelector((state: RootState) => state.post).posts;
