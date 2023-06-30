import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { getPostList } from "../api/post.ts";
import ListCard from "../components/ListCard.tsx";
import PostForm from "../components/PostForm.tsx";
import { setPosts } from "../store/post/slice.ts";
import { usePosts } from "../store/post/hooks.ts";
import { addAlert } from "../store/alert/slice.ts";
import { AlertType } from "../store/alert/types.tsx";
import type { PostListResponse } from "../api/types/post.ts";

export default function Home() {
  const posts = usePosts();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<PostListResponse | null>(null);

  const fetchPosts = () => {
    console.log("hitting fetchPosts");
    getPostList(page)
      .then((response: PostListResponse) => {
        setResponse(response);
        dispatch(setPosts(response.results));
      })
      .then(() => setPage(page + 1))
      .catch((error) => {
        dispatch(
          addAlert({
            type: AlertType.Danger,
            message: error.message,
          })
        );
      });
  };

  useEffect(() => {
    document.title = "PyConf | Home";
  }, []);

  return (
    <>
      <PostForm />

      <br />

      <div className="row">
        <InfiniteScroll
          next={fetchPosts}
          dataLength={posts.length}
          hasMore={true}
          loader={
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="col-sm-12 col-md-12 col-lg-4 offset-lg-4"
            >
              <ListCard {...post} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
