import React from "react";
import { Route } from "react-router-dom";
// import { MoviesList } from "./components/MoviesList";
 import { MoviesList } from "./components/MoviesList/MoviesListView";

// import { MoviesDetail } from "./components/MovieDetail/MovieDetail";
import { MovieDetail } from "./components/MovieDetail/MovieDetailView";
import { Home } from "./Home";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/movies/" exact component={MoviesList} />
    <Route path="/movies/:id"  component={MovieDetail} />
  </>
);