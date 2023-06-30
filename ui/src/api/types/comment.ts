import type { Comment } from "../../store/comment/types.ts";

export type CommentListResponse = {
  readonly count: number;
  readonly results: Comment[];
  readonly next: string | null;
  readonly previous: string | null;
};

export type CommentCreateData = {
  content: string;
  post_id: number;
};
