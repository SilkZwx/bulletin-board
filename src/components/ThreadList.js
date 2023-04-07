import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


export const ThreadList = () => {
  function NextThreads(){
		setStartId(offset+10);
	}

	function PrevThreads(){
		if (offset-10 > -1){
			setStartId(offset-10);
		}
	}

  function ShowThreads(thread, index) {
    return (
      <Link to={'/thread/'+thread.id+'/'+thread.title} style={{ textDecoration: 'none', color: 'inherit'  }} key={index}>
        <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} >
          {thread.title}
       </div>
      </Link>
    );
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
			{threads.map(ShowThreads)}
			<button type={"button"} onClick={PrevThreads} style={{padding: "10px"}}>戻る</button>
			<button type={"button"} onClick={NextThreads} style={{padding: "10px"}}>進む</button>
    </div>
  );
}
