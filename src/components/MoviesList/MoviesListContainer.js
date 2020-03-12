import {useState, useEffect} from "react";
import { MoviesService } from "../../services/MoviesService";

export const useMoviesListContainer = () => {
    const [movies, setMovies] = useState([]);

    const requestMovies = async () => {
        const response = await MoviesService.getPopularMovies();
        setMovies(response['data']['results']);
      };
    
    useEffect(() => { requestMovies(); }, []);

    return movies;
}