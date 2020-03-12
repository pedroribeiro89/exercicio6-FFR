
import React from "react";
import { useMovieDetailContainer } from "./MovieDetailContainer";

export const MovieDetail = (props) => {
    const movie = useMovieDetailContainer(props);
    return (
        <article>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
        </article>
    );
}