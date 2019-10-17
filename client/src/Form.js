import React from "react";
import axios from "axios";

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
