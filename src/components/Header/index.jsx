import React from 'react';
import "./Header.css"

const Header = (props) => {
  return (
    <div id="header" className="Header">
      <h1 className="App__title">Rick and Morty Characters</h1>
      <div className="darkModeButtonContainer">
        <span className="darkModeButtonText">Dark Mode</span>
        <div className="darkModeButton" onClick={() => props.toggleDarkMode()}>
            <div className="darkModeButtonBall"></div>
            <span className="darkModeButtonStatus">OFF</span>
        </div>  
      </div>
    </div>
  )
}
export default Header;