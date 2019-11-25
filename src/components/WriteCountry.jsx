import React from "react";
import axios from "axios";
import Axios from "./Axios";
import Europe from "./Europe";
import Asia from "./Asia";
import Australia from "./Australia";
import NorthAmerica from "./NorthAmerica";
import SouthAmerica from "./SouthAmerica";
import Africa from "./Africa";
import Antartica from "./Antartica";

export default class WriteCountry extends React.Component {
  state = {
    name: "",
    continent: "",
    country: ["none"],
    info: "",
    imageUrl: ""
  };

  handleChangeName = e => {
    console.log(this.state.name);

    this.setState({ name: e.target.value });
  };
  handleChangeContinent = e => {
    this.setState({ continent: e.target.value });
  };
  handleChangeCountry = e => {
    console.log(this.state.country);

    this.setState({ country: e.target.value });
  };
  handleChangeInfo = e => {
    console.log(this.state.info);

    this.setState({ info: e.target.value });
  };
  handleChangeImageUrl = e => {
    console.log(this.state.imageUrl);

    this.setState({ imageUrl: e.target.value });
  };
  handleSubmit = async event => {
    event.preventDefault();

    axios
      .post("http://localhost:2500/importantCities", {
        name: this.state.name,
        continent: this.state.continent,
        country: this.state.country,
        info: this.state.info,
        imageUrl: this.state.imageUrl
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <form className="form-write-city">
        <fieldset>
          <legend>Add your own review of a city around the world:</legend>
          <div className="form-row">
            <label htmlFor="name-input">City name:</label>
            <textarea
              id="name-input"
              onChange={this.handleChangeName}
            ></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="contient">
              Continent:
            </label>
            <select
              id="continent"
              name="continent"
              value={this.state.continent}
              onChange={e =>
                this.setState({
                  continent: e.target.value
                })
              }
            >
              <option value="none">None</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Antartica">Antartica</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="country-input">Country:</label>
            <textarea
              id="country-input"
              onChange={this.handleChangeCountry}
            ></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="info-input">Info:</label>
            <br></br>
            <textarea
              id="info-input"
              rows="10"
              cols="150"
              onChange={this.handleChangeInfo}
            ></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="imageUrl-input">
              Image's link:
            </label>
            <textarea className="imageUrl"
              id="imageUrl-input"
              onChange={this.handleChangeImageUrl}
            ></textarea>
          </div>
          <div className="form-row">
            <button onClick={this.handleSubmit}>SEND YOUR REVIEW</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
