import React from 'react';
import WordList from './word-list';
import WordSearch from './word-search';

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
        <WordSearch onSearch={this.getWords} />
        <WordList words={this.state.words} />
      </div>
    );
  };
}
