import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstWidget from './FirstWidget'

import Button from "./Button";
import useCount from "./store";

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>First</h1>
      <FirstWidget/>
    </div>
  );
}

export default App;
