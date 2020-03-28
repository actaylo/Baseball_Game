import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

const Teams = (props) => {
  if (props.data.length === 0){
    return (
      <div>
        Loading...
      </div>
    )
  }

  const renderTeamList = () => {
    console.log(props.data)
    let teams = [];
    props.data.FantasyBaseballNerd.Team.map((team, id) => {
      teams.push(
        <div key={id}>
          <Container>
            <Row>
              <Col>
                  <ListGroup>
                   <ListGroup.Item><a href="#teamdetail">{team.name._text}</a></ListGroup.Item>
                   <ListGroup.Item>{team.league._text} League {team.division._text}</ListGroup.Item>
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
        console.log(id)
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