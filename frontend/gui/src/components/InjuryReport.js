import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const convert = require("xml-js");

function InjuryReport(props) {
  const url = '/injuries'
  const teamCode = props.teamCode
  const [ injuryReport, setInjuryReport ] = useState([])

  useEffect(() => {
    loadData();
  },[])

  const loadData = async () => {
    const response = await axios.get(url)
    const data = await JSON.parse(
      convert.xml2json(response.data, { compact: true, ignoreAttributes: false, ignoreDeclaration: true, ignoreComment: true, nativeType: false, trim: true }));
      let injuryArr = data.FantasyBaseballNerd.Team
      return findTeam(injuryArr, teamCode)
  }

  const findTeam = (injuryArr, teamCode) => {
    injuryArr.map(team => {
      if (team._attributes.Code === teamCode)
      setInjuryReport(Object.entries(team.Player))
    })
  }
  console.log(injuryReport)
  const newArr = (injuryReport) => {
    let newObj = []
    for (let i = 0; i < injuryReport.length; i++) {
      newObj.push(injuryReport[i][1])
    }
    return newObj
  }
  console.log(newArr(injuryReport))

  return (
    <div>
      <h1>Injury Report: {newArr}</h1>
    </div>
  )
}

export default InjuryReport