import { useState, FormEvent } from "react";

import { useDispatch } from "react-redux";

import { createComment } from "../api/comment.ts";
import { appendComment } from "../store/comment/slice.ts";

interface CommentFormProps {
  readonly post_id: number;
}

export default function CommentForm(props: CommentFormProps) {
  const { post_id } = props;

  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleCommentFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = await createComment(content, post_id);
    setContent("");
    dispatch(appendComment(comment));
  };

  return (
    <form onSubmit={handleCommentFormSubmit}>
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
              placeholder="what'd you think about this?"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12 col-md-2 offset-md-5">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              post comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
