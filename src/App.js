import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Sara Duarte and is{" "}
          <a href="https://github.com/SaraD22/shecodes_weather">
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
