import React from "react";
import './HomePage.css';
import { AddThread } from "./AddThread";
import { ThreadList } from "./ThreadList";

export const HomePage = () => {
  return (
    <div className="Page">
      <div className="Thread-list">
        <div style={{fontSize: "60px", padding: "10px"}}>スレッド一覧</div>
        {ThreadList()}
      </div>
      <div className="Add-thread">
        {AddThread()}
      </div>
    </div>
  );
}