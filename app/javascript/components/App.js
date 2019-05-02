import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Words from './words';
import Home from './home';

export default class App extends React.Component {
  render = () => {
    return(
      <div>
      	<Switch>
      	  <Route exact path="/" component={Home} />
      	  <Route exact path="/words" component={Words} />
      	</Switch>
      </div>
    );
  };
}
