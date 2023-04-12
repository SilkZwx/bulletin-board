import React from "react";
import { useContext } from "react";
import { myThreadList } from "../App";
import { useNavigate } from "react-router-dom";

export const AddThread = () => {
  const [inputValue, setInputValue] = React.useState('');
  const {myThreads, setMyThreads} = useContext(myThreadList);
  const navigate = useNavigate();

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleButton() {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({"title": inputValue})
    })
    .then(res => res.json())
    .then(data => {
      setMyThreads([...myThreads, {id: data.id, title: data.title}]);
      console.log(data);
      console.log(myThreads);
      navigate('/');
    })
    .catch(reason =>{
      console.log(reason);
    });
  }

  return (
    <div>
      <label htmlFor="thread">新しいスレッドを作成</label><br/>
      <input type={"text"} id="thread" name="thread" onChange={handleInput}/><br/>
      <button type={"button"} id="thread" name="thread" onClick={handleButton}>新規スレッドを作成</button>
    </div>
  );
}