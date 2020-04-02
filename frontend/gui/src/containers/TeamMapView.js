import React from 'react';
import axios from 'axios';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
const convert = require("xml-js");

class TeamMap extends React.Component {

  render() {
    
    const teamCordinates = {
      lat: this.props.latitude,
      lng: this.props.longitude
    }

    const style = {
      width: '400px',
      height: '400px'
    }

    if (!this.props) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return(
      <div>
        <div className='TeamMap'>
              <Map 
              google={this.props.google}
              zoom={15}
              initialCenter={teamCordinates}
              style={style}>
              <Marker />
              </Map>
        </div>
      </div>
    )
  }
}



export default GoogleApiWrapper({


  apiKey: ('AIzaSyCwjYLF3sq8LlshHRDpuhBWnApdOs-HCfs')

 })(TeamMap);
