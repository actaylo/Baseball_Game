import React from 'react';
import { Route } from 'react-router-dom';

import TeamsView from './containers/TeamsView';
import TeamDetailsView from './containers/TeamDetailsView';
import WeatherView from './containers/WeatherView';

import PostListView from './containers/PostListView';
import PostDetailView from './containers/PostDetailView';
import TeamDetails from './components/TeamDetails';

const BaseRouter = () => (
      <div>
        <Route exact path='/' component={ TeamsView } />
        <Route exact path='/:teamCode/' component={ TeamDetails } />
        <Route exact path='/team/:postID/' component={ PostDetailView } />
      </div>
)

export default BaseRouter