import React from 'react';
import Spinner from '../common/spinner';
import ProgressTable from './progress-table';
import WordSearch from './word-search';
import { Link } from 'react-router-dom';

import { getProgress } from '../../api/translation-api';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWords } from '../../store/word-actions';
import { fetchTranslations } from '../../store/translation-actions';
import { filteredProgresses } from '../../store/progress-selector';
import { loading } from '../../store/loading-selector';

import './progress.css';

class ProgressApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWords();
    this.props.fetchTranslations();
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
    if (this.props.loading) {
      return <Spinner />;
    }

    return(
      <div className="row">
        <div className="col-lg-8">
          <div className="row align-items-center">
            <div className="col-sm-4">
              <h1>Progress</h1>
            </div>
            <div className="col-sm-8">
              <WordSearch />
            </div>
          </div>
          <ProgressTable progresses={this.props.progresses}/>
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

const mapStateToProps = (state) => {
  return {
    progresses: filteredProgresses(state),
    loading: loading(state),
  }
}

const mapDispatchToProps = { fetchWords, fetchTranslations }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProgressApp));
