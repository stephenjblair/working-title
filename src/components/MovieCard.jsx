import React from 'react';

const MovieCard = props => {
    return (
        <div> 
        <img src={props.Poster}/>
        <p>{props.Title}</p>
        <p>{props.Year}</p>
        <p>{props.Genre}</p>
        <button type="submit">More</button>
        </div>
    )
}

export default MovieCard;