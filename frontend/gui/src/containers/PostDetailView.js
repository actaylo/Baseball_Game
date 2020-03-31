import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

import PostForm from '../components/PostForm';

class PostDetailView extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          post: {}
      
    }
  }


  componentDidMount() {
    const postID = this.props.match.params.postID;
    console.log(this.props)
    axios.get(`http://127.0.0.1:8000/api/${postID}/`)
      .then(res => {
        this.setState({
          post: res.data
      })
    })
  }

handleFormDelete = (event) => {
  const postID = this.props.match.params.postID
  axios.delete(`http://127.0.0.1:8000/api/${postID}/`)
  this.props.history.push('/');
}



render() {
  if (!this.props.match){
    return (

    <div>
     Loading...
    </div>
    )
  }
  return (
    <div>
      <div key={this.state.id}>
        <Card border="primary" style={{ 
            width: '500px' 
            }}>
          <Card.Header as="h5">{this.state.post.title}</Card.Header>
          <Card.Body>
            <Card.Text as="h6">{this.state.post.body}</Card.Text>
            <Card.Text as="small">{this.state.post.date_posted}</Card.Text>
          </Card.Body>
          <ButtonGroup className="mb-2">
            <Button variant="primary">Reply</Button>
            <Button variant="primary">Update</Button>
            <Button variant="primary">Delete</Button>
          </ButtonGroup>
        </Card>
      </div>
      <h3>Update Post</h3>
      <PostForm requestType='UPDATE' postID={this.props.match.params.postID} btnText='Update'/>
      <form onSubmit={this.handleFormDelete}>
        <Button variant="danger" type="submit">Delete</Button>
      </form>
    </div>
    )
  }
}

export default PostDetailView