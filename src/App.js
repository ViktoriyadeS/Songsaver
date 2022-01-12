import React from "react";
import Container from "./components/Container";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container />
      <nav className="navigation">
        <Link to="/About">ABOUT US</Link>{" "}
      </nav>
    </div>
  );
}

export default App;
