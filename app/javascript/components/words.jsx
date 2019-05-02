import React from 'react';

export default class Words extends React.Component {

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
      	This is the words page
      </div>
    );
  };
}
