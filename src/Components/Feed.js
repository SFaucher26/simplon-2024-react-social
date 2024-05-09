import { useMemo } from "react";
import PostCard from "./PostCard";


export default function Feed({ feedType, feedContent, onPostSelect }) {
  //Utiliser un useMemo pour mettre en cache des données et ne pas les recharcher 
  const nb_posts = useMemo(()=>{
    return feedContent.reduce((acc, _post)=>{
      return acc+1
    }, 0)
  }, [feedContent])

  return (
    <div>
      <h2>{feedType} ({nb_posts} posts) </h2>
      <div className="posts">
        {feedContent.map((post) => (
          <a onClick={() => onPostSelect(post.id)}>
            <PostCard id={post.id} user={post.user_id} content={post.content} />
          </a>
        ))}
        
      </div>
    </div>
  );
}
