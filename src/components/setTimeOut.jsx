const { Component } = require("react")

import React, {Component} from 'react' ; 

class setTimeOut extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const movies = await axios.get("http://yts-porxy.new.sh/list_movies.json");
        console.log(movies.data.data.movies);
    }
    

    /* 
    getMovies = async () => {
        const { data: { data: {movies} } } = await axios.get("http://yts-proxy.noew.sh/list_movies.json");
        console.log(movies);
        this.setState({movies});

        console.log(this.state.movies);
    } */

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000);
    }

    render(){
        const { isLoading } = this.state;
        return ( 
            <div>
                { isLoading ? "Loading" : "We are ready"}
            </div>
        )
    }

}
export default setTimeOut;