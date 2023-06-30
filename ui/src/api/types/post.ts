import type { Post } from "../../store/post/types.ts";

export type PostListResponse = {
  readonly count: number;
  readonly results: Post[];
  readonly next: string | null;
  readonly previous: string | null;
};

export type PostCreateRequest = {
  content: string;
};
