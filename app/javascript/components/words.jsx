import React from 'react';
import WordList from './word-list';
import WordSearch from './word-search';
import { getWords } from '../api/word-api';

export default class Words extends React.Component {

  constructor(props) {
    super(props);
    this.state = { words: [] };
  }

  fetchWords = (searchText) => {
    getWords(searchText, (words) => this.setState({ words: words }));
  };

  render = () => {
    return(
      <div>
        <WordSearch onSearch={this.fetchWords} />
        <WordList words={this.state.words} />
      </div>
    );
  };
}
