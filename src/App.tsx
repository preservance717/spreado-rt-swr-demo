import React from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      Counter with Redux Toolkit:
      <Counter />
    </div>
  );
}

export default App;
