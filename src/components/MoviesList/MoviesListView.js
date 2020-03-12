
import React from "react";
import { Link } from "react-router-dom";
import { useMoviesListContainer } from "./MoviesListContainer";

export const MoviesList = () => {
    const moviesList = useMoviesListContainer();

    return (
        <ul>
        {moviesList.map(movie => (
            <li key={movie.id}>
            <Link to={'/movies/'+movie.id}>{movie.title}</Link>
            </li>
            )
        )}
        </ul>
    );
}