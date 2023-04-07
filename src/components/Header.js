import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="App-header">
      <h3 className="App-title">
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit'  }}>掲示板</Link>
      </h3>
      <div className="App-link">
        <Link to={"/Thread/new"} style={{ textDecoration: 'none', color: 'inherit' }}>新しいスレッドを作成</Link>
      </div>
    </header>
  );
}