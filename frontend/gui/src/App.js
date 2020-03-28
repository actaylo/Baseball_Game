import React from 'react';
// JS files
import Layout from './containers/Layout'
import PostList from './containers/PostListView'
import TeamList from './containers/TeamListView'
// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <TeamList />
        <PostList />
      </Layout>
    </div>
  );
}

export default App;
