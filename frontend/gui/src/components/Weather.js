import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  const Weather = (props) => {
  if (props.data.length === 0){
    return (
      <div>
        Loading...
      </div>
    )
  }

  const renderWeather = () => {
    let teamWeather = [];
    props.data.FantasyBaseballNerd.Team.map((team, id) => {
      // console.log(Object.values(Object.entries(team.Day[0])[6]))
      let teamAttributes = team._attributes
      let today = Object.values(Object.entries(team.Day[0])[0])[1]._text
      let todayLow = Object.values(Object.entries(team.Day[0])[1])[1]._text
      let todayHigh = Object.values(Object.entries(team.Day[0])[2])[1]._text
      let forecast = Object.values(Object.entries(team.Day[0])[3])[1]._text
      let icon = Object.values(Object.entries(team.Day[0])[4])[1]._text
      let windChill = Object.values(Object.entries(team.Day[0])[5])[1]._text
      teamWeather.push(
        <div key={id}>
          <Container>
            <Row>
              <Col>
                  <ListGroup>
                    <ListGroup.Item>{teamAttributes.TeamName}</ListGroup.Item>
                  </ListGroup>
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item>{today} | Low: {todayLow} | High {todayHigh}</ListGroup.Item>
                  <ListGroup.Item>{forecast}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        )
    })
    return teamWeather
  }

  return (
    <div>
      <ListGroup>
        {
          renderWeather()
        }
      </ListGroup>
    </div>
  )
}

export default Weather