import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  getWords = (search) => {
    fetch(`/api/v1/words?search=${search}`)
      .then((response) => {return response.json()})
      .then((words) => {this.setState({ words: words }) });
  };

  render = () => {
    return(
      <div>
        I am here
      </div>
    );
  };
}
