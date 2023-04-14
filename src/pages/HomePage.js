import React from "react";
import "./HomePage.css";
import { AddThread } from "../components/AddThread";
import { ThreadList } from "../components/ThreadList";
import { MyThreadList } from "../components/MyThreadList";

export const HomePage = () => {
  return (
    <div className="Page">
      <div className="My-thread-list">
        <div style={{fontSize: "60px", padding: "10px"}}>作成したスレッド</div>
        <MyThreadList />
      </div>
      <div className="Thread-list">
        <div style={{fontSize: "60px", padding: "10px"}}>スレッド一覧</div>
        <ThreadList />
      </div>
      <div className="Add-thread">
        <AddThread />
      </div>
    </div>
  );
}

/*<div className="My-thread-list">
        <div>作成したスレッド</div>

      </div>*/