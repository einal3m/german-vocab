import React from 'react';
import Spinner from '../common/spinner';
import ProgressTable from './progress-table';
import { Link } from 'react-router-dom';

import { getAllWords } from '../../api/word-api';
import { getProgress } from '../../api/translation-api';
import { withRouter } from 'react-router-dom';

import './progress.css';

class ProgressApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getProgress((translations) => {
      this.setState({ translations: translations, loading: false })
    });
  }

  handleReviewNowClick = () => {
    let { history } = this.props;
    history.push({ pathname: '/review' });
  };

  renderReviewNav = () => {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleReviewNowClick}>Review Now</button>
      </div>
    );
  };

  render = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    return(
      <div className="row">
        <div className="col-lg-8">
          <h1>Progress</h1>
          <ProgressTable translations={this.state.translations}/>
        </div>
        <div className="col-lg-4">
          {this.renderReviewNav()}
          <p>This is the review page.</p>
          <p>Learn the words you've seen.</p>
          <p>Exclude the words you've learnt.</p>

          <p>Learn by random, type, level etc.</p>
          <p>Learn x number of words at a time.</p>
          <p>Learn article only, or word only</p>
          <p>Learn plurals.</p>          
        </div>  
      </div>
    );
  };
}

export default withRouter(ProgressApp);
