import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './Weather.css'
import WeatherCity from './WeatherCity'

class Weather extends Component {
  state = {
    city: '',
  }

  handleChange = (ev) => {
        this.setState({ city: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/weather/${this.state.city}`)
        this.setState({ city: '' })
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
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="City Name"
                />
            </div>
            <div>
                <button type="submit">Look at your local weather</button>
            </div>
          </form>
          <Route path="/weather/:city" component={WeatherCity} />
          <Route exact path="/weather" render={() => <h3>Please enter a city to check the weather.</h3>} />
        </div>

    )
  }
}

export default Weather