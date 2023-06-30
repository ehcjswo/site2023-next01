import React from 'react'
import "./movie.module.css";

const MovieItem = ({movie}) => {
  return (
    <li>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' rel="noreferrer">
            <img width={300} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />   
            <span className="title">{movie.title}</span>
            <span className="star">{movie.vote_average}</span>
        </a>
    </li>
  )
}

export default MovieItem
