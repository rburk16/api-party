import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './Weather.css'


class Weather extends Component {
  state = {
    zipCode: '',
  }

  handleChange = (ev) => {
        this.setState({ zipCode: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/weather/${this.state.zipCode}`)
        this.setState({ zipCode: '' })
    }

  render = () => {
    return (
        <div className="weather">
          <img 
            className="weather-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/OpenWeatherMap_logo.png"
            alt="openweathermap logo"
            />
          <form onSubmit={this.handleSubmit}>
            <div>
                <input
                    type="text"
                    value={this.state.zipCode}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">Look at your local weather</button>
            </div>
          </form>
          
          <Route exact path="/weather" render={() => <h3>Please enter a zip code to check the weather.</h3>} />
        </div>

    )
  }
}

export default Weather


//<Route path="/weather/:SOMETHING GOES HERE" component={WeatherZip} />