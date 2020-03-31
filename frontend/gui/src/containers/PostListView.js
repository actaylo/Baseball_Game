import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from '../components/Posts';
import PostForm from '../components/PostForm';

class PostListView extends React.Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }

  render() {
    return(
      <div>
        <Posts data={this.state.posts} />
        <h3>Create Post</h3>
        <PostForm requestType='POST' btnText='Create' />
      </div>
    )
  }
}

export default PostListView