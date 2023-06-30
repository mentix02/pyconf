import { FC, useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { getPost } from "../api/post.ts";
import ListCard from "../components/ListCard.tsx";
import { getCommentList } from "../api/comment.ts";
import { addAlert } from "../store/alert/slice.ts";
import { AlertType } from "../store/alert/types.tsx";
import CommentForm from "../components/CommentForm.tsx";
import { setPost, setComments } from "../store/comment/slice.ts";
import { usePost, useComments } from "../store/comment/hooks.ts";

interface CommentProps {
  readonly post_id: string;
}

const Comments: FC<CommentProps> = (props: CommentProps) => {
  const { post_id } = props;

  const dispatch = useDispatch();

  const post = usePost();
  const comments = useComments();

  const [loading, setLoading] = useState(true);

  const showError = (err: Error) => {
    dispatch(
      addAlert({
        message: err.message,
        type: AlertType.Danger,
      })
    );
  };

  useEffect(() => {
    const num_post_id = Number.parseInt(post_id);

    if (Number.isNaN(num_post_id)) {
      showError(new Error("Invalid post id"));
      return;
    }

    getPost(Number.parseInt(post_id))
      .then((post) => {
        dispatch(setPost(post));
        return post.id;
      })
      .then((post_id) => {
        getCommentList(post_id)
          .then((commentListResp) => {
            dispatch(setComments(commentListResp.results));
          })
          .catch(showError);
      })
      .catch(showError)
      .finally(() => setLoading(false));
  }, [post_id, dispatch, showError]);

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      {post && <CommentForm post_id={post.id} />}
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-4">
          {post && <ListCard {...post} />}
          <hr />
          {comments.map((comment) => (
            <ListCard light key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
