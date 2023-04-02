import React from "react";
import { useParams } from "react-router-dom";
import { PostList } from "./PostList";

export const ThreadPostPage = () => {
  const { id, title } = useParams();
  return (
    <div>
      <div style={{fontSize: "60px", padding: "10px"}}>{title}</div>
      <PostList id={id} />
    </div>
  );
}
