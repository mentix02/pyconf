import configureEndpoint from "./host.ts";

import type { Post } from "../store/post/types.ts";
import type { PostListResponse, PostCreateRequest } from "./types/post.ts";

const BASE_URL = configureEndpoint("api/v1/post");

export const createPost = async (content: string): Promise<Post> => {
  let response: Response;
  const request: PostCreateRequest = { content };

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
    throw new Error("Server Error");
  }

  return await response.json();
};

export const getPost = async (post_id: number): Promise<Post> => {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}/${post_id}/`);
  } catch (error) {
    throw new Error("Network Error");
  }

  if (response.status === 404) {
    throw new Error("404");
  } else if (!response.ok) {
    throw new Error("Server Error");
  }

  return await response.json();
};

export const getPostList = async (page = 1): Promise<PostListResponse> => {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}/list/?page=${page}`);
  } catch (error) {
    console.error(error);
    throw new Error("Network Error");
  }

  if (!response.ok) {
    throw new Error("Server Error");
  }

  return await response.json();
};
