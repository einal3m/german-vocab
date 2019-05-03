import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Words from './words';
import Home from './home';
import Edit from './edit/edit';
import NewUser from './users/new-user';

export default class App extends React.Component {
  render = () => {
    return(
      <div>
      	<Switch>
      	  <Route exact path="/" component={Home} />
      	  <Route exact path="/words" component={Words} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/users" component={NewUser} />
      	</Switch>
      </div>
    );
  };
}
