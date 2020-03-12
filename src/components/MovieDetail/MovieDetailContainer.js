import {useState, useEffect} from "react";
import { MoviesService } from "../../services/MoviesService";

export const useMovieDetailContainer = (props) => {
    const [movie, setMovie] = useState({});

    const requestMovie = async () => {
        const response = await MoviesService.getMovie(props.match.params.id);
        console.log(response);
        setMovie({original_title: response.data.original_title, overview: response.data.overview});
      };
  
      useEffect(() => { requestMovie(); }, []);

    return movie;
}