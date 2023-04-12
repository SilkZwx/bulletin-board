import React from "react";
import { Link } from "react-router-dom";

export const ShowThread = (props) => {
  return (
    <Link to={'/thread/'+props.id+'/'+props.title} style={{ textDecoration: 'none', color: 'inherit'}}>
      <div style={{border: '3px solid black', boxSizing: 'border-box', fontSize: '30px', width: '600px', margin: '0 auto'}} >
        {props.title}
      </div>
    </Link>
  );
}