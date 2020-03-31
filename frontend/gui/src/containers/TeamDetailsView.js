import React from 'react';
import TeamDetails from '../components/TeamDetails';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const convert = require("xml-js");

class TeamDetailsView extends React.Component {

    state = {
      team: []
    }

    componentDidMount() {
      const teamID = this.props.match.params.id
      const url = '/teams/'
      axios.get(url)
        .then(res => {
          const data = JSON.parse(
            convert.xml2json(res.data, { compact: true, ignoreAttributes: true, ignoreDeclaration: true, ignoreComment: true })
          )
          this.setState({ team: data })
        })
      }
          
    render() {
      return(
        <div>
          <TeamDetails data={this.state.team} />
        </div>
      )
    }
  }
  
  export default TeamDetailsView