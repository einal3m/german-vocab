import React from 'react';
import Spinner from '../common/spinner';
import { getTranslationsForReview } from '../../api/translation-api';
import { postReview } from '../../api/review-api';

export default class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true, 
      index: 0, 
      review: '', 
      wrong: false, 
      correct: false, 
      finished: false 
    };
  }

  componentDidMount() {
    getTranslationsForReview((translations) => {
      this.setState({ 
        translations: translations, 
        currentTranslation: translations[0],
        loading: false 
      })
    });
  }

  onChangeGerman = (event) => {
    this.setState({ review: event.target.value });
  };

  fullWord = (translation) => {
    if (translation.article) {
      return translation.article + ' ' + translation.german;
    } else {
      return translation.german;
    }
  }

  onTranslated = (event) => {
    event.preventDefault();

    const wrong = this.state.review != this.fullWord(this.state.currentTranslation);
    if (wrong) {
      this.setState({ wrong: true });
    } else {
      this.setState({ correct: true });
    }

    postReview(this.state.currentTranslation.id, { correct: !wrong });
  };

  onNextWord = (event) => {
    event.preventDefault();

    let nextIndex = this.state.index + 1;
    if (nextIndex == this.state.translations.length) {
      this.setState({ finished: true });
    } else {
      this.setState({ 
        wrong: false,
        correct: false,
        review: '',
        index: this.state.index + 1,
        currentTranslation: this.state.translations[nextIndex],
      });
    }
  }

  renderFinished = () => {
    return (
      <div>Finished</div>
    );
  };

  renderYouAreWrong = () => {
    return (
      <div className="alert alert-danger" role="alert">
        <div>You are wrong!</div>
        <div>{this.fullWord(this.state.currentTranslation)}</div>
        <div>{this.state.currentTranslation.example}</div>
      </div>
    );
  };

  renderYouAreCorrect = () => {
    return (
      <div className="alert alert-success" role="alert">
        <div>You are correct!</div>
        <div>{this.state.currentTranslation.example}</div>
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
        <div className='word english'>{this.state.currentTranslation.translation}</div>
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
