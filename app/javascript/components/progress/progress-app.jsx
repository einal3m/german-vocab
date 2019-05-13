import React from 'react';
import Spinner from '../common/spinner';
import Gauge from '../common/gauge';
import YesNo from './yes-no.jsx';
import { getAllWords } from '../../api/word-api';
import { getProgress } from '../../api/translation-api';
import { Link } from 'react-router-dom';

export default class ProgressApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getProgress((translations) => {
      this.setState({ translations: translations, loading: !this.state.words })
    });
    getAllWords((words) => {
      this.setState({ words: words, loading: !this.state.translations })
    });
  }

  getWordForTranslation = (translation) => {
    return this.state.words.filter(word => word.id == translation.word_id)[0];
  };

  renderRows = () => {
    return this.state.translations.map(translation => {
      return (
        <tr key={translation.id}>  
          <td>{translation.german}</td>
          <td><Gauge level={translation.level} /></td>
          <td><YesNo yes={translation.learnt} /></td>
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
        <Link className="nav-link" to={`/review`}>Review</Link>
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
