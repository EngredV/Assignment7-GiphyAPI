import React, { Component } from "react";
import GifCard from "./Components/GifCard";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <div className="icon">
            <a href="/">
            <img src="giphyLogo.png" alt="logo" className="logo"/>
            </a>
        </div>
        <div className = "title"> GIPHY SEARCH</div>
          <div className="gifs">
            <div>
              <GifCard />
            </div>
          </div>
      </div>
    );
  }
}

export default App;


