import { React, useContext } from "react";
import { ShowThread } from "./ShowThread";
import { myThreadList } from "../App";

export const MyThreadList = () => {
  const {myThreads, setMyThreads} = useContext(myThreadList);
  
  if (myThreads.length === 0) {
    return (
      <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} >
        まだスレッドを作成していません
      </div>
    );
  } else {
    return (
      <div>
			  {myThreads.map(thread => <ShowThread id={thread.id} title={thread.title} key={thread.id} />)}
      </div>
    );
  }
}