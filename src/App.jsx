import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Digits from "./components/Digits";

function App() {
  const [state, setState] = useState(0);
  return (
    <>
      <Display state={state} />
      <Digits />
    </>
  );
}

export default App;
