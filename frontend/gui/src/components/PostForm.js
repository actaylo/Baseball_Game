import React from 'react';
import axios from 'axios';

import { Form, FormControl, FormCheck, Button } from 'react-bootstrap'

class PostForm extends React.Component {

  handleFormSubmit = (event, requestType, postID) => {
    // event.preventDefault()
    const title = event.target.elements.title.value
    const body = event.target.elements.body.value

    switch ( requestType ) {
      case 'POST':
          axios.post('http://127.0.0.1:8000/api/', {
          title: title,
          body: body
        })
        .then(res => console.log(res))
        .catch(error => console.err(error))
      case 'UPDATE':
          axios.put(`http://127.0.0.1:8000/api/${postID}/`, {
          title: title,
          body: body
        })
        .then(res => console.log(res))
        .catch(error => console.err(error))
    }

    console.log(title, body)
  }

  render() {
    return (

      <Form onSubmit={(event) => this.handleFormSubmit(
        event,
        this.props.requestType,
        this.props.postID 
        )}>
        <Form.Group controlId="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control type="input" placeholder="Something Relevant" />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Create A Post</Form.Label>
          <Form.Control as="textarea" rows="4" placeholder="Tell your experience or share tips about the ballpark!"/>
        </Form.Group>
{/* 
        <Form.Group controlId="Team Select">
        <Form.Label>Team Select</Form.Label>
        <Form.Control as="select">
          <option>Team</option>
        </Form.Control>
        </Form.Group> */}

        <Button variant="primary" type="submit">{this.props.btnText}</Button>
      </Form>

    )
  }
}

export default PostForm