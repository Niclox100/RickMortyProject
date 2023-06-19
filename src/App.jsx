import React, { useState } from "react";

import Characters from "./components/Characters";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const background = document.querySelector(".App")
    const title = document.querySelector(".App__title");
    const characterContainer = document.querySelectorAll(".character-container")
    const charactersListTitle = document.querySelector(".charactersListTitle")
    const darkModeButton = document.querySelector(".darkModeButton");
    const darkModeButtonText = document.querySelector(".darkModeButtonText");
    const darkModeButtonStatus = document.querySelector(".darkModeButtonStatus");
    const darkModeButtonBall = document.querySelector(".darkModeButtonBall");
    const search = document.querySelector(".search")
    
    background.classList.toggle("dark-background");
    title.classList.toggle("darkModeText");
    charactersListTitle.classList.toggle("darkModeText")
    search.classList.toggle("darkModeSearch")
    characterContainer.forEach(character => {
      character.classList.toggle("darkModeText")
      character.classList.toggle("darkModeContainer")
    });

    darkModeButton.classList.toggle("active")
    darkModeButtonText.classList.toggle("darkModeText")
    darkModeButtonBall.classList.toggle("active")
    darkModeButtonStatus.classList.toggle("active")
    
    darkModeButtonStatus.textContent = darkModeButton.classList.contains("active")
      ? "ON"
      : "OFF";
}
    return (
      <div className="App">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
        <Characters isDarkMode={darkMode} />
      </div>
    );
  };




export default App;