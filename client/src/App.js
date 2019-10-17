import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie, { addToSavedList } from "./Movies/Movie";
import Form from "./Movies/Form";
import axios from "axios";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);

  const addToSavedList = movie => {
    console.log(this.state.savedListList);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  const getMovies = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response));
  };

  const removeMovie = id => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const updateMovie = updatedMovie => {
    setMovies(
      movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie))
    );
  };

  useEffect(() => {
    console.log("fetching movies");
    getMovies();
  }, []);

  return (
    <>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        render={props => <MovieList {...props} movies={movies} />}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          const movie = movies.find(
            movie => movie.id === props.match.params.id
          );
          if (!movie) {
            return <div>Loading...</div>;
          }
          return (
            <Form
              {...props}
              movie={movie}
              updateMovie={updateMovie}
              getMovies={getMovies}
            />
          );
        }}
      />
      <Route
        path="/movies/:id"
        render={props => {
          const movie = movies.find(
            movie => movie.id === props.match.params.id
          );
          if (!movie) {
            return <div>Loading...</div>;
          }
          return (
            <Movie
              {...props}
              movie={movie}
              removeMovie={removeMovie}
              addToSavedList={addToSavedList}
            />
          );
        }}
      />
    </>
  );
};

export default App;
