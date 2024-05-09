import { useEffect, useState, useContext, useCallback } from "react";
import Feed from "../Components/Feed.js";
import Navigation from "../Components/Navigation.js";
import {
  getNewestPost,
  getPostById,
  getTrendingPost,
} from "../Services/PostApi";
import PostCard from "../Components/PostCard.js";
import { getUserByToken } from "../Services/Users.js";
import { UserContext } from "../Providers/UserContext.js";

export default function FeedPage() {
  //state pour afficher selon le bouton courant
  const [currentFeed, setCurrentFeed] = useState("trendings");

  // state pour récupérer et changer un post à partir de l'id
  const [postId, setPostId] = useState(null);
  const [post, setPostInfo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  // récupération du contexte avec useContext
  const { userLog } = useContext(UserContext);

  useEffect(() => {
    let feedFetcher = getTrendingPost;
    if (currentFeed === "newest") {
      feedFetcher = getNewestPost;
    }
    feedFetcher().then((posts) => {
      console.log("fetch", posts);
      setPosts(posts);
    });
  }, [currentFeed]);

  useEffect(() => {
    if (postId !== null) {
      getPostById(postId).then((post) => {
        setPostInfo(post);
      });
    }
  }, [postId]);

  useEffect(() => {
    if (userLog) {
      getUserByToken(userLog).then((user) => {
        setUser(user);
      });
    }
  }, [userLog]);
  console.log("userLog : ", user);

  const onPostSelect = (id) => {
    setPostId(id);
  };

  const handleTrendings = useCallback(() => {
    setCurrentFeed("trendings");
  }, [setCurrentFeed]);

  const handleNewest = useCallback(() => {
    setCurrentFeed("newest");
  }, [setCurrentFeed]);

  let feedEl = (
    <Feed
      feedType="Les plus likés"
      feedContent={posts}
      onPostSelect={onPostSelect}
    />
  );
  if (currentFeed === "newest") {
    feedEl = (
      <Feed
        feedType="Les plus récents"
        feedContent={posts}
        onPostSelect={onPostSelect}
      />
    );
  }

  let postEl;

  if (post) {
    postEl = (
      <div className="post">
        <PostCard id={post?.id} user={post?.user_id} content={post?.content} />
      </div>
    );
  }
  return (
    <div className="home">
      {user && <div className="welcome">Bonjour {user.username} </div>}
      <div>{postEl}</div>
      <Navigation
        currentFeed={currentFeed}
        onTrendingClick={handleTrendings}
        onNewestClick={handleNewest}
      />
      {feedEl}
    </div>
  );
}
