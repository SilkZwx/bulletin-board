import * as React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const ThreadList = () => {
    function ShowThreads(thread, index) {
        return (
            <Link to={'/thread/'+thread.id+'/'+thread.title} style={{ textDecoration: 'none', color: 'inherit'  }}>
                <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} 
                key={index}>
                    {thread.title}
                </div>
            </Link>
        );
    }

    let startId = 0;
    const [thread, setThread] = React.useState([]);

    useEffect(() => {
        fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=' + startId, {
            method: 'GET', headers: {'accept': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setThread(data);
        })
        .catch(reason => {
            console.log(reason);
        });
    }, []);
    //console.log(threads);

    return(
        <div>
            {thread.map(ShowThreads)}
        </div>
    );
}