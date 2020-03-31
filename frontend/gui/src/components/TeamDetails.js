import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PostListView from '../containers/PostListView';
import WeatherView from '../containers/WeatherView';

const convert = require("xml-js");

class TeamDetails extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        team: null
      }
  }
  
  componentDidMount() {
    const teamCode = this.props.match.params.teamCode
    const url = '/teams'
    axios.get(url)
      .then(res => {
        const data = JSON.parse(
          convert.xml2json(res.data, { compact: true, ignoreAttributes: true, ignoreDeclaration: true, ignoreComment: true })
        )
        let teamsArr = data['FantasyBaseballNerd']['Team']
        
        return this.findTeam(teamsArr, teamCode)
      })
    }
    
  findTeam = (teamArr, teamCode) => {
    teamArr.map(team => {
      if (team.code._text === teamCode) {
        this.setState({
          team: team, 
          teamCode: teamCode
        })
      }
    })
  }

  render() {    

    if (!this.state.team) {
      return (
        <div>
         Loading...
        </div>
      )
    }
    return (
      <div>
        <h1>{this.state.team.name._text}</h1>
        <h3>{this.state.team.league._text} League {this.state.team.division._text}</h3>
        <WeatherView teamCode={this.state.teamCode}/>
        <PostListView teamCode={this.state.teamCode}/>
      </div>

    )
  }
}

export default TeamDetails