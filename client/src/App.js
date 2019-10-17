import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  componentDidMount() {}
  addToSavedList = movie => {
    console.log(this.state.savedListList);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path="/edit/movies/:id" />
        <Route path={`/update-movie/${this.state.movie.id}`} component={Form} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie {...props} addToSavedList={this.addToSavedList} />;
          }}
        />
      </div>
    );
  }
}
