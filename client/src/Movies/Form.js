import axios from "axios";
import React, {
  useState,
  Component,
  item,
  setItem,
  initialItem,
  props
} from "react";
import { Route } from "react-router-dom";
import SavedList from "./SavedList";
import MovieList from "./MovieList";
import Movie from "./Movie";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${item.id}`, item)
      .then(res => {
        console.log(res);
        setItem(initialItem);
        props.updateItems(res.data);
        props.history.push("/item-list");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Movie Name:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
