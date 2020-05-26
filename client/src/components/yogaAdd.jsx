import React, { Component } from "react";
import HomeRedirect from "./homeRedirect";
import Preview from "./preview";
import axios from "axios";

class YogaAdd extends Component {
  state = {
    name: null,
    description: null,
    image: null,
    time: null,
    redirect: false,
  };

  onInputValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addYoga = (e) => {
    e.preventDefault();
    const yogaPose = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      time: this.state.time,
    };

    axios.post("/api/yogaPoses", yogaPose).then((response) => {
      console.log(response);
      this.setState({ redirect: true });
    });
  };

  render() {
    return (
      <React.Fragment>
        <HomeRedirect redirect={this.state.redirect}></HomeRedirect>;
        <section>
          <div className="edit-header"></div>
          <h2>Add a new Yoga Pose</h2>

          <div className="item-container">
            <form onSubmit={this.addYoga}>
              <div className="form-control">
                <label htmlFor="name">Yoga Name: </label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onInputValueChange}
                />
              </div>

              <div className="form-control">
                <label htmlFor="description"> Description: </label>
                <textarea
                  name="description"
                  onChange={this.onInputValueChange}
                ></textarea>
              </div>

              <div className="form-control">
                <label htmlFor="time">Time: </label>
                <input
                  type="number"
                  name="time"
                  onChange={this.onInputValueChange}
                />
              </div>

              <div className="form-control">
                <label htmlFor="image">Sample Image: </label>
                <input
                  type="text"
                  name="image"
                  onChange={this.onInputValueChange}
                />
              </div>

              <input type="submit" value="Add" className="btn" />
            </form>
            <Preview yoga={this.state}></Preview>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default YogaAdd;
