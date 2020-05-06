import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
    </>
  );
}

export default App;
