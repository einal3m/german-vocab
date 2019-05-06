import React from 'react';
import Spinner from '../common/spinner';
import { getAllWords } from '../../api/word-api';
import { getAllProgresses } from '../../api/progress-api';

export default class ProgressApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getAllProgresses((progresses) => {
      this.setState({ progresses: progresses, loading: !this.state.words })
    });
    getAllWords((words) => {
      this.setState({ words: words, loading: !this.state.progresses })
    });
  }

  getWordForProgress = (progress) => {
    return this.state.words.filter(word => word.id == progress.word_id)[0];
  };

  startReview = () => {

  };

  renderRows = () => {
    return this.state.progresses.map(progress => {
      return (
        <tr key={progress.id}>  
          <td>{this.getWordForProgress(progress).german}</td>
          <td>{progress.translation}</td>
          <td>{progress.level}</td>
          <td>{progress.learnt}</td>
        </tr>
      );
    });
  };

  renderProgresses = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">german</th>
            <th scope="col">english</th>
            <th scope="col">level</th>
            <th scope="col">learnt</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  };

  renderReviewNav = () => {
    return (
      <div>
        <button onClick={this.startReview}>Review</button>
      </div>
    );
  };

  render = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    console.log(this.state);
    return(
      <div>
        <div>
          <p>This is the review page.</p>
          <p>Learn the words you've seen.</p>
          <p>Exclude the words you've learnt.</p>

          <p>Learn by random, type, level etc.</p>
          <p>Learn x number of words at a time.</p>
          <p>Learn article only, or word only</p>
          <p>Learn plurals.</p>
          <p>Your Vocab</p>
          {this.renderReviewNav()}
        </div>
        {this.renderProgresses()}
      </div>
    );
  };
}
