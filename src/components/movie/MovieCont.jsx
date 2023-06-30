import React from 'react'
import MovieItem from './MovieItem'
import styles from "./movie.module.css";

const MovieCont = ({ movies }) => {
  return (
    <div className={`${styles.movie__cont} container`}>
        <ul>
            {movies.map((movie, index)=>(
                <MovieItem key={index} movie={movie} />
            ))}
        </ul>
    </div>
  )
}

export default MovieCont
