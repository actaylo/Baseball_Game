import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
// JS files
import Layout from './containers/Layout'
// React Bootstrap


function App() {
    return (
      <div className="App">
        <Router>
          <Layout>
              <BaseRouter />
          </Layout>
        </Router>
      </div>
    );
  }

export default App;
