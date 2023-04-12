import { useState } from "react";

export const useMyThreads = () => {
  // [{id: '', title: ''}, ... ]
  const [myThreads, setMyThreads] = useState([]);
  return {
    myThreads,
    setMyThreads
  };
}