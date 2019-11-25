import React from "react";
import Axios from "./Axios";
import Europe from "./Europe";
import Asia from "./Asia";
import Australia from "./Australia";
import NorthAmerica from "./NorthAmerica";
import SouthAmerica from "./SouthAmerica";
import Africa from "./Africa";
import Antartica from "./Antartica";


export default class Form extends React.Component {
  state = {
    isDisplayed: false,
    continent: "none"
  };
  changeIsDisplayed = () => {
    this.setState({
      isDisplayed: true
    });
  };
  render() {
    if (this.state.isDisplayed) {
      if (this.state.continent === "Europe") {
        return <Europe />;
      }
      if (this.state.continent === "Asia") {
        return <Asia />;
      }       if (this.state.continent === "North America") {
        return <NorthAmerica />;
      }      if (this.state.continent === "South America") {
        return <SouthAmerica />;
      }      if (this.state.continent === "Africa") {
        return <Africa />;
      }      if (this.state.continent === "Australia") {
        return <Australia />;
      }      if (this.state.continent === "Antartica") {
        return <Antartica />;
      }else {
        return <Axios />;
      }
    }
    return (
      <form className="form-continents">
        <fieldset>
          <legend>Learn more about cities around the world:</legend>
        <div className="form-row">
          <label htmlFor="contient">
            What continent that you want to visit:
          </label>  
          <select
            className="custom-select"
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
          {console.log(this.state.continent)}
          
          <div className="form-row">
         
          <button onClick={this.changeIsDisplayed}>PICK A CONTINENT</button>
          </div>
        </fieldset>
      </form>
    );
  }
}
