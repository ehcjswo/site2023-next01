"use client";
import ContTitle from "@/components/title/ContTitle";
import MovieCont from "@/components/movie/MovieCont";
import React, { useEffect, useState } from "react";
const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=77d6ca74699e19cd03456654aa0ead98"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data.results);
    };
    getData();
  }, []);
  console.log(movies);
  return (
    <>
        <ContTitle title="movie" />
        <MovieCont movies={movies} />
    </>
  );
};
export default Movie;