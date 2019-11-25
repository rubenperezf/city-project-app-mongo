import React from "react"
import axios from "axios"
import Form from "./Form"


export default class Antartica extends React.Component {
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

            <p>Only Casey needs Antartica. Talk with him.</p>
    
    
          </div>
        )
      }
    }
