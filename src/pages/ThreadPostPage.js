import React from "react";
import { useParams } from "react-router-dom";
import { PostList } from "../components/PostList";
import { AddPost } from "../components/AddPost";
import "./ThreadPostPage.css";

export const ThreadPostPage = () => {
  const { id, title } = useParams();
  const [posts, setPosts] = React.useState(null)

  return (
    <div className="Page">
      <div className="Post-list">
        <div style={{fontSize: "60px", padding: "10px"}}>{title}</div>
        <PostList id={id} posts={posts} setPosts={setPosts} />
      </div>
      <div className="Add-post">
        <AddPost id={id} posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}
