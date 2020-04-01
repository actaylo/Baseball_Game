import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const convert = require("xml-js");

function DepthChart(props) {
  const url = '/depth'
  const teamCode = props.teamCode
  const [ depthChart, setDepthChart ] = useState([])

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await axios.get(`${url}/${teamCode}`)
    const data = await JSON.parse(
      convert.xml2json(response.data, { compact: true, ignoreAttributes: true, ignoreDeclaration: true, ignoreComment: true }));
      setDepthChart(data.FantasyBaseballNerd);
      // console.log(data.FantasyBaseballNerd)
        // [0].Player[0].playerName._text)
  }
  // console.log(depthChart)
  return (
    <h1>Depth Chart: {depthChart._attributes}</h1>
  )
}

export default DepthChart