import React from 'react';
import '../Moviecard.css';


const MovieCard = props => {
    return (
        <div className="card-container"> 
        <img  className="card-image" src={props.Poster} alt="poster"/>
        <p className="card-title">{props.Title}</p>
        <p className="card-year">{props.Year}</p>
        <p className="card-genre">{props.Genre}</p>
        <button className="card-button" type="submit">More</button>
        </div>
    )
}

export default MovieCard;