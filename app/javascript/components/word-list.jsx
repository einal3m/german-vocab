import React from 'react';
import Word from './word';

export default class WordList extends React.Component {
    
  renderWord = (word) => {
    return (
      <Word key={word.id} word={word} />
    );  
  };

  renderWords = () => {
    return this.props.words.map(word => this.renderWord(word));
  }

  render = () => {
    return (
      <div>
        {this.renderWords()}
      </div>
    );
  }
}
