import React from "react"
import axios from "axios"
import Form from "./Form"

export default class Africa extends React.Component {
    state = {
        city: []
    };
    componentDidMount() {
        axios.get(`http://localhost:2500/importantCities`)
          .then(res => {
            const city = res.data;
            this.setState({ city });
          })
      }
    
      render() {

        return (
          <div className="cities-container">
            { this.state.city.citiesInstance.filter(city=> city.continent === "Africa").map(city=> <div key={city.id} className="cities"><h1>{city.name}</h1> <p>{city.country}</p> 
        <p>{city.continent}</p> <p className="info-text">{city.info}</p><img src={city.imageUrl} alt='place imagen'/></div>)}
    
    
          </div>
        )
      }
    }
