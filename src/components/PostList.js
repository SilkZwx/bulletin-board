import React, { useEffect } from "react";

export const PostList = (props) => {
  function ShowPosts(post, index){
    if (!post.post){
      return null;
    }
    return (
      <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} 
      key={index}>
        {post.post}
      </div>
    );
  }

  let offset = 0;
  const { posts, setPosts, id } = props;

  useEffect(() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/' + id + '/posts?offset='+ offset, {
      method: 'GET', headers: {'accept': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      setPosts(data.posts);
    })
    .catch(reason => {
      console.log(reason);
    });
  }, [offset, setPosts, id])

  if (!posts){
    return null;
  }

  if (posts.length === 0) {
    return (
      <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} >
        まだ投稿はありません
      </div>
    );
  } else {
    return (
      <div>
        {posts.map(ShowPosts)}
      </div>
    );
  }
}
