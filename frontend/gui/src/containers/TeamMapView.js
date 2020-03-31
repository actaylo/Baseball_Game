import React from 'react';
import axios from 'axios';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
const convert = require("xml-js");


// function TeamMap() {
//   return (
//     <GoogleMap />
//   )
// }

// export default function TeamMap() {
//   return <div>
//     Map Goes Here:
//   </div>
// }
class TeamMap extends React.Component {

  render() {

    console.log(this.props)
    
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
          <h1>Map Goes Here:</h1>
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

  apiKey: ('AIzaSyA94k-xJ_1YiGVQ1uvIaluBECLnKCZ_3JI')

 })(TeamMap);
