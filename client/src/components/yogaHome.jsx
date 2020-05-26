import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class YogaHome extends Component {
  state = {
    yogaPoses: [],
  };

  componentDidMount = () => {
    let promise = axios.get("/api/yogaPoses");
    promise
      .then((response) => {
        console.log("res  is ----------->" + response);
        console.log(response);
        console.log("res.json()=======");
        console.log(response.data);
        this.setState({ yogaPoses: response.data });
      })
      .catch((error) => {
        console.log("error------------->" + error);
        //console.log(co);
      });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1></h1>
        </header>
        <section>
          <h2>Yoga Poses</h2>
          <div className="home">
            {this.state.yogaPoses.map((pose) => {
              return (
                <div className="item" key={pose._id}>
                  <div
                    className="cover"
                    style={{ backgroundImage: "url(" + pose.image + ")" }}
                  ></div>
                  <div>
                    <Link to={"yoga/edit-delete/" + pose._id}>
                      <h3>{pose.name}</h3>
                    </Link>
                    <p>{pose.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default YogaHome;
