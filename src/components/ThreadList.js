import React, { useEffect } from "react";
import { ShowThread } from "./ShowThread";


export const ThreadList = () => {
  function NextThreads(){
		setStartId(offset+10);
	}

	function PrevThreads(){
		if (offset-10 > -1){
			setStartId(offset-10);
		}
	}

  const [offset, setStartId] = React.useState(0);
  const [threads, setThreads] = React.useState([]);

  useEffect(() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=' + offset, {
    	method: 'GET', headers: {'accept': 'application/json'}
    })
  	.then(res => res.json())
    .then(data => {
      setThreads(data);
    })
    .catch(reason => {
      console.log(reason);
    });
  }, [offset]);

  return(
    <div>
			{threads.map(thread => <ShowThread id={thread.id} title={thread.title} key={thread.id} />)}
			<button type={"button"} onClick={PrevThreads} style={{padding: "10px"}}>戻る</button>
			<button type={"button"} onClick={NextThreads} style={{padding: "10px"}}>進む</button>
    </div>
  );
}
