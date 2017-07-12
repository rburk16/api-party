import React, { Component } from 'react'
import './WeatherCity.css'

class WeatherCity extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            city: {}
        }

        this.fetchCity(props)
    }
//&units=imperial&APPID=4d01edf1f166cbf5cbd1405e5bf749a7
    fetchCity = (props) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.match.params.city}&APPID=4d01edf1f166cbf5cbd1405e5bf749a7`)
            .then(data => data.json())
            .then(city => this.setState({ city }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchCity(nextProps)
        }
    }

    render() {
        const { city } = this.state
        return (
            <div className="weather-city">
                <h2>Current Weather:{city.weather[0].main}</h2>
                <h3>Temperature: {city.main.temp}</h3>
                <h3>Humidity: {city.main.humidity}</h3>
                <h3>Wind Speed: {city.wind.speed}</h3>
                <h3>Sunrise: {city.sys.sunrise}</h3>
                <h3>Sunset: {city.sys.sunset}</h3>
            </div>
        )
    }
}

export default WeatherCity

