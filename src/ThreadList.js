import * as React from 'react'
import { useEffect } from 'react';

export const ThreadList = () => {
    function ShowThreads(thread, index) {
        return <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} key={index}>{thread.title}</div>;
    }

    let startId = 0;
    const [threads, setThreads] = React.useState([]);

    useEffect(() => {
        fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=' + startId)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setThreads(data);
        })
        .catch(reason => {
            console.log(reason);
        });
    }, []);
    //console.log(threads);

    return(
        <div>
            <div style={{fontSize: '60px', padding: '10px'}}>スレッド一覧</div>
            {threads.map(ShowThreads)}
        </div>
    );
}