import React from 'react';
import Spinner from '../common/spinner';
import { getAllWords } from '../../api/word-api';
import { getAllProgresses } from '../../api/progress-api';

export default class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, index: 0, review: '', wrong: false, correct: false, finished: false };
  }

  componentDidMount() {
    getAllProgresses((progresses) => {
      this.setState({ progresses: progresses, loading: !this.state.words })
    });
    getAllWords((words) => {
      this.setState({ words: words, loading: !this.state.progresses })
    });
  }

  onChangeGerman = (event) => {
    this.setState({ review: event.target.value });
  };

  onTranslated = (event) => {
    event.preventDefault();

    if (this.state.review != this.getWordForProgress().german) {
      this.setState({ wrong: true });
    } else {
      this.setState({ correct: true });
    }

    // save the review (date, correct/wrong)
    // check if it's correct
    // move to the next if it is, 
    // alert if it isn't
  };

  onNextWord = (event) => {
    event.preventDefault();
    let nextIndex = this.state.index + 1;
    if (nextIndex == this.state.progresses.length) {
      this.setState({ finished: true });
    } else {
      this.setState({ wrong: false, correct: false, review: '', index: this.state.index + 1})
    }
  }

  getWordForProgress = () => {
    return this.state.words.filter(word => word.id == this.state.progresses[this.state.index].word_id)[0];
  };

  renderFinished = () => {
    return (
      <div>Finished</div>
    );
  };

  renderYouAreWrong = () => {
    return (
      <div className="alert alert-danger" role="alert">
        <div>You are wrong!</div>
        <div>{this.getWordForProgress().german}</div>
        <div>{this.state.progresses[this.state.index].example}</div>
      </div>
    );
  };

  renderYouAreCorrect = () => {
    return (
      <div className="alert alert-success" role="alert">
        <div>You are correct!</div>
        <div>{this.state.progresses[this.state.index].example}</div>
      </div>
    );
  };

  renderButton = () => {
    if (this.state.wrong || this.state.correct) {
      return <button onClick={this.onNextWord} className="btn btn-primary">Next</button>
    } else {
      return <button onClick={this.onTranslated} className="btn btn-primary">Done</button>
    }
  }

  renderReview = () => {
    return (
      <div>
        <div className='word english'>{this.state.progresses[this.state.index].translation}</div>
        {this.state.wrong && this.renderYouAreWrong()}
        {this.state.correct && this.renderYouAreCorrect()}
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputGerman">Translation</label>
            <div className="col-sm-10">
              <input
                type="text" 
                className="form-control" 
                id="inputGerman" 
                value={this.state.review}
                aria-describedby="germanHelp" 
                onChange={this.onChangeGerman}
              />
              <small id="germanHelp" className="form-text text-muted">Translate this word.</small>
            </div>
          </div>
          {this.renderButton()}
        </form>
      </div>
    );
  }

  render = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    if (this.state.finished) {
      return this.renderFinished();
    }

    return(
      <div>
        <p>if you get a word right, count goes up by one, if you get it wrong, count goes down by one. When you get to 6(?) you have learnt it.</p>
        {this.renderReview()}
      </div>
    );
  };
}
