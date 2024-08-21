import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/WickedZ2309"
            target="_blank"
            rel="noreferrer"
          >
            Andrea G.
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/WickedZ2309/shecodes-react-week5-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
