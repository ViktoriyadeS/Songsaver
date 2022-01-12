import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="text-box">
      <h1>About Me and The Project</h1>
      <p>
        {" "}
        Hi! My name is Viktoriya and I am learning to become a Full-stack
        developer. I love solving problems by putting the puzzle pieces
        together. As a part of my curriculum I've created this "Songsaver". It
        is simple: store and display songs in the form of a list. Along that,
        you can apply filters and sort items. <br></br>I hope you enjoy it!
        <br></br>
      </p>
      <nav className="navigation">
        <Link to="/">BACK</Link>
      </nav>
    </main>
  );
}
