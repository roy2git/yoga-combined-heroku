import React, { Component } from "react";
import HomeRedirect from "./homeRedirect";
import axios from "axios";

import Preview from "./preview";

class YogaEditDelete extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    time: "",
    redirect: false,
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/api/yogaPoses/" + this.props.match.params.id)
      .then((response) => {
        console.log(response);
        this.setState({ name: response.data.name });
        this.setState({ description: response.data.description });
        this.setState({ image: response.data.image });
        this.setState({ time: response.data.amount });
      });
  };

  onInputValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateYoga = (e) => {
    e.preventDefault();
    const pose = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      time: this.state.time,
    };

    axios
      .put(
        "http://localhost:5000/api/yogaPoses/" + this.props.match.params.id,
        pose
      )
      .then((response) => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteYogaPose = () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this Yoga Pose?"
    );
    if (confirmDelete) {
      axios
        .delete(
          "http://localhost:5000/api/yogaPoses/" + this.props.match.params.id
        )
        .then((response) => {
          console.log(response);
          this.setState({ redirect: true });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Item was not deleted");
    }
  };

  render() {
    return (
      <React.Fragment>
        <HomeRedirect redirect={this.state.redirect}></HomeRedirect>;
        <section>
          <div className="edit-header"></div>
          <h2>Update a Yoga Pose</h2>

          <div className="item-container">
            <form onSubmit={this.updateYoga}>
              <div className="form-control">
                <label htmlFor="name">Yoga Name: </label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onInputValueChange}
                  defaultValue={this.state.name}
                />
              </div>

              <div className="form-control">
                <label htmlFor="description"> Description: </label>
                <textarea
                  name="description"
                  onChange={this.onInputValueChange}
                  value={this.state.description}
                ></textarea>
              </div>

              <div className="form-control">
                <label htmlFor="time">Time: </label>
                <input
                  type="number"
                  name="time"
                  onChange={this.onInputValueChange}
                  defaultValue={this.state.time}
                />
              </div>

              <div className="form-control">
                <label htmlFor="image">Sample Image: </label>
                <input
                  type="text"
                  name="image"
                  onChange={this.onInputValueChange}
                  defaultValue={this.state.image}
                />
              </div>

              <input type="submit" value="Update" className="btn" />
            </form>

            <div>
              <Preview yoga={this.state}></Preview>
              <button className="btn btn-delete" onClick={this.deleteYogaPose}>
                Delete this Pose
              </button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default YogaEditDelete;
