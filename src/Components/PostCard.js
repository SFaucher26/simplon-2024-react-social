import { useCallback, useReducer } from "react";

export default function PostCard({ id, user, content }) {
  function handleLikeOnPost(state, action) {
    switch (action) {
      case "increment":
        return {
          nb_like: state.nb_like + 1,
        };
      case "decrement":
        return {
          nb_like: state.nb_like - 1,
        };
    }
  }
  const [likeState, likeDispatch] = useReducer(handleLikeOnPost, {
    nb_like: 0,
  });
  const handleLike = useCallback(() => {
    likeDispatch("increment");
  }, [likeDispatch]);

  const handleDisLike = useCallback(() => {
    likeDispatch("decrement");
  }, [likeDispatch]);
  return (
    <div className="card">
      <h2>Post {id}</h2>

      <p>{content}</p>
      <button className="btnlike" onClick={handleLike}>
        {" + "}
      </button>
      <span>{"👍" + likeState.nb_like}</span>
      <button className="btnlike" onClick={handleDisLike}>
        {" - "}
      </button>
    </div>
  );
}
