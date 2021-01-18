import React, { Component } from "react";

const SearchField = ({value, onChange, onSearch, onTrending, onRandom}) => {
    return(
      <div className = "container">
        <div className = "input-bar">
            <input placeholder="Try dancing" className = "user-input" value={value} onChange={onChange} />
            <button className = "btnA" onClick={onSearch}>Search</button>
        </div>
        <div>
            <button className = "btnB" onClick={onTrending}>Trending</button>
            <button className = "btnC" onClick={onRandom}>Random</button>
        </div>
      </div>
    );
  };
  export default SearchField;