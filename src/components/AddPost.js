import React from "react";


export const AddPost = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const {id, posts, setPosts} = props;

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleButton() {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/' + id + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({"post": inputValue})
    })
    .then(res => res.json())
    .then(data => {
      setPosts([data, ...posts]);
    })
    .catch(reason =>{
      console.log(reason);
    });
  }

  return (
    <div>
      <input type={"text"} id="thread" name="thread" onChange={handleInput}/><br/>
      <button type={"button"} id="thread" name="thread" onClick={handleButton}>投稿する</button>
    </div>
  );
}