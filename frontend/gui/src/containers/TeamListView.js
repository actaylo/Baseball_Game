import React from 'react';
import axios from 'axios';
import Teams from '../components/Teams';
import 'bootstrap/dist/css/bootstrap.min.css';
const convert = require("xml-js");


class TeamList extends React.Component {

    state = {
      teams: []
    }

    componentDidMount() {
      const url = '/teams'
      axios.get(url)
        .then(res => {
          const data = JSON.parse(
            convert.xml2json(res.data, { compact: true, ignoreAttributes: true, ignoreDeclaration: true, ignoreComment: true })
          )
          this.setState({ teams: data })
        })
    }

    render() {
      return(
        <div>
          <Teams data={this.state.teams} />
        </div>
      )
    }
  }
  
  export default TeamList
  