import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Teams = (props) => {
  if (props.data.length === 0){
    return (
      <div>
        Loading...
      </div>
    )
  }

  const renderTeamList = () => {
    let teams = [];
    props.data.FantasyBaseballNerd.Team.map((team, id) => {
      teams.push(
        <div key={id}>
          <Container>
            <Row>
              <Col>
                  <ListGroup>
                   <ListGroup.Item><Link to={`/${team.code._text}`}>{team.name._text}</Link></ListGroup.Item>
                  </ListGroup>
              </Col>
              <Col></Col>
            </Row><Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        )
    })
    return teams
  }

  return (
    <div>
      <ListGroup>
        {
          renderTeamList()
        }
      </ListGroup>
    </div>
  )
}

export default Teams