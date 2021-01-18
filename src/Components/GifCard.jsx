import React, { Component } from "react";
import SearchField from "./SearchField";
import axios from 'axios';

class GifCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            gifs: [],
            userInput: "",
            randomGif: [],
            trendingGifs: [],
            randomDisplay: null,
        };
    }

    handleInput = (event) => {
        this.setState({userInput: event.target.value});
    }

    handleSearch = (event) => {
        const userInput = this.state.userInput;
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=iUiZNgO1UCUqHilW8CJbtxuJcYxzA3T5`)
        .then((response) => {
            let data = response.data.data;
            this.setState({gifs: data});
            this.setState({randomDisplay: false});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleTrendingSearch = () => {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=iUiZNgO1UCUqHilW8CJbtxuJcYxzA3T5`)
        .then(response => {
            let data = response.data.data;
            this.setState({trendingGifs: data});
            this.setState({randomDisplay: false});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleRandomSearch = () => {
        axios.get(`https://api.giphy.com/v1/gifs/random?&api_key=iUiZNgO1UCUqHilW8CJbtxuJcYxzA3T5`)
        .then(response => {
            let data = response.data.data;
            this.setState({randomGifs: data});
            this.setState({randomDisplay: true});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        let showRandom = this.state.showRandom;
        return (
            <div className="searchField">
                <SearchField
                    value = {this.state.userInput}
                    onChange = {this.handleInput}
                    onSearch = {this.handleSearch}
                    onTrending = {this.handleTrendingSearch}
                    onRandom = {this.handleRandomSearch}
                />
                <div className="display"> 
                    {this.state.gifs.map(data => {
                        if (this.state.randomDisplay !== true) {
                            return (
                                <div className="gifs-display">
                                    <div><img src={data.images.downsized_medium.url} className="gif-display" alt="gifs"></img></div>
                                <div className="display-style">
                                    <h1 className="text">{data.title}</h1>
                                </div>
                                </div>
                            )}
                            else {
                                <div><img src={this.state.randomGif}/></div>
                            }
                        })}
                            
                </div>
            </div>
        );
    }
  }
  
  export default GifCard;


