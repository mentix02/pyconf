import { FormEvent, useState } from "react";

import { useDispatch } from "react-redux";

import { createPost } from "../api/post.ts";
import { appendPost } from "../store/post/slice.ts";

export default function PostForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState<string>("");

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const handlePostFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = await createPost(content);
    setContent("");
    dispatch(appendPost(post));
  };

  return (
    <form onSubmit={handlePostFormSubmit}>
      <div className="row">
        <div className="col-sm-12 col-md-4 offset-md-4">
          <div className="form-group">
            <textarea
              rows={3}
              required
              autoFocus
              value={content}
              onChange={handleChange}
              className="form-control"
              placeholder="what's on your mind?"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12 col-md-2 offset-md-5">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              post thought
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
