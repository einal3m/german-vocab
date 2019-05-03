import React from 'react';
import { getWord } from '../../api/word-api';
import { getProgress } from '../../api/progress-api';

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getWord(this.props.match.params.id, (word) => this.setState({ word: word, loading: !!this.state.progress }));
    getProgress(this.props.match.params.id, (progress) => this.setState({ progress: progress, loading: !!this.state.word }));
  }

  render = () => {
    console.log(this.props);
    return (
      <div>
        Edit
      </div>
    );
  };
}
