import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'


class Movies extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "" ,
            imdbResults: [],
            isRetrieved: false,

        }
    }

    handleInputChange= event => {
        this.setState ({title: event.target.value, isRetrieved: false})
        
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.get(`http://localhost:3000/titles/${this.state.title}`).then(movie => {this.setState({imdbResults: [movie.data.imbd], isRetrieved: true})}).catch(error => {console.log(error)});
    }
    render () {
        const {
            imdbResults
        }=this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} value={this.state.title} />
                    <button type="submit">Search</button>
                </form>
                <div>
                    {this.state.isRetrieved&& imdbResults.map(result => <MovieCard {...result} />)}
                </div>
            </div>
        )
        }
    }
export default Movies;