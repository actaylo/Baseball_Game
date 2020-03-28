import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Card, Button } from 'react-bootstrap'

const Posts = (props) => {
  if (props.data.length === 0){
    return (
      <div>
        Loading...
      </div>
    )
  }

  const renderPosts = () => {
    console.log(props.data)
    let posts = [];
    props.data.map((post, id) => {
      posts.push(
        <div key={id}>
          <Card border="primary" style={{ 
            width: '500px' 
            }}>
            <Card.Header as="h5">{post.title}</Card.Header>
            <Card.Body>
              <Card.Text as="h6">{post.body}</Card.Text>
              <Card.Text as="small">{post.date_posted}</Card.Text>
            </Card.Body>
            <Button variant="primary">Reply to Post</Button>
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