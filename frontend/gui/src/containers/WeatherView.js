import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamMap from './TeamMapView';

const convert = require("xml-js");


class WeatherView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      team: null
    }
  }

    componentDidMount() {
      const teamCode = this.props.teamCode
      const url = '/weather'
      axios.get(url)
        .then(res => {
          const data = JSON.parse(
            convert.xml2json(res.data, { compact: true, ignoreAttributes: false, ignoreDeclaration: true, ignoreComment: true, alwaysArray: false })
          )
           let weatherArr = data['FantasyBaseballNerd']['Team']
          return this.findTeam(weatherArr, teamCode)
        })
    }

    findTeam = (weatherArr, teamCode) => {
      weatherArr.map(team => {
        if (team._attributes.Code === teamCode) {
          this.setState({
            team: team.Day[0].day._text,
            todayLow: team.Day[0].low._text,
            todayHigh: team.Day[0].high._text,
            forecast: team.Day[0].forecast._text,
            latitude: team._attributes.Latitude,
            longitude: team._attributes.Longitude,
            teamCode: teamCode
          })
        }
      })
    }

    render() {
      return(
        <div>
          <h3>Weather:</h3>
          <h6>{this.state.team}</h6>
          <h6>Low Temperature: {this.state.todayLow}</h6>
          <h6>High Temperature: {this.state.todayHigh}</h6>
          <h6>Forecast: {this.state.forecast}</h6>
          <h6>Located at:</h6>
        <div style={{ height: '500px'}}>

          {
            this.state.latitude
            &&
          <TeamMap latitude={this.state.latitude} longitude={this.state.longitude} />
          }
        </div>
        </div>
      )
    }
  }
  
  export default WeatherView