import configureEndpoint from "./host.ts";

import type { Comment } from "../store/comment/types.ts";
import type {
  CommentCreateData,
  CommentListResponse,
} from "./types/comment.ts";

const BASE_URL = configureEndpoint("api/v1/comment");

export const createComment = async (
  content: string,
  post_id: number
): Promise<Comment> => {
  let response: Response;
  const request: CommentCreateData = { content, post_id };

  try {
    response = await fetch(`${BASE_URL}/create/`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Network Error");
  }

  if (!response.ok) {
    console.log(await response.text());
    throw new Error("Server Error");
  }

  return await response.json();
};

export const getCommentList = async (
  post_id: number,
  page = 1
): Promise<CommentListResponse> => {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}/list/${post_id}/?page=${page}`);
  } catch (error) {
    console.error(error);
    throw new Error("Network Error");
  }

  if (response.status === 404) {
    throw new Error("404");
  } else if (!response.ok) {
    throw new Error("Server Error");
  }

  return await response.json();
};
