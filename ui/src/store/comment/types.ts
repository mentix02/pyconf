import type { Post } from "../post/types.ts";

export type Comment = {
  id: number;
  content: string;
  readonly post_id: number;
  readonly created_at: string;
};

export type CommentState = {
  readonly post?: Post;
  readonly comments: Comment[];
};
