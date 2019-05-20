import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

import { Switch, Route } from 'react-router-dom';
import Words from './words';
import Home from './home';
import EditApp from './edit/edit-app';
import NewUser from './users/new-user';
import Navbar from './common/navbar';
import ReviewApp from './review/review-app';
import ProgressApp from './progress/progress-app';

export default class App extends React.Component {
  render = () => {
    return(
      <div className="container">
        <Provider store={store}>
          <Navbar />
        	<Switch>
        	  <Route exact path="/" component={Home} />
        	  <Route exact path="/words" component={Words} />
            <Route exact path="/edit/:id" component={EditApp} />
            <Route exact path="/users" component={NewUser} />
            <Route exact path="/review" component={ReviewApp} />
            <Route exact path="/progress" component={ProgressApp} />
        	</Switch>
        </Provider>
      </div>
    );
  };
}
