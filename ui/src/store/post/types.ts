export type Post = {
  id: number;
  content: string;
  comment_count: number;
  readonly created_at: string;
};

export type PostState = {
  readonly posts: Post[];
};
