import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Posts = (props) => {
  if (props.data.length === 0){
    return (
      <div>
        Loading...
      </div>
    )
  }

  const renderPosts = () => {
    let posts = [];
    props.data.map((post, id) => {
      posts.push(
        // <div className="row">
        //      <div className="col-4  pt-3 border-right">
        //        <h6>Say something about React</h6>
        //        {/* Comment Form Component */}
        //      </div>
        //      <div className="col-8  pt-3 bg-white">
        //        {/* Comment List Component */}
        //      </div>
        //   </div>
        <div key={post.id}>
          <Card border="primary" style={{ 
            width: '500px' 
            }}>
            <Card.Header as="h5"><Link to={`/team/${post.id}/`}>{post.title}</Link></Card.Header>
            <Card.Body>
              <Card.Text as="h6">{post.body}</Card.Text>
              <Card.Text as="small">{post.date_posted}</Card.Text>
            </Card.Body>
            <ButtonGroup className="mb-2">
              <Button variant="outline-primary" size='sm'>Reply</Button>
              {/* <Button variant="success">Update</Button>
              <Button variant="danger" type="submit">Delete</Button> */}
            </ButtonGroup>
          </Card>
        </div>
        )
    })
    return posts
  }

  return (
    <div>
      <ListGroup>
        {
          renderPosts()
        }
      </ListGroup>
    </div>
  )
}

export default Posts