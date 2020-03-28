import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../components/Posts'
import axios from 'axios'

class PostList extends React.Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/post/')
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
      </div>
    )
  }
}

export default PostList