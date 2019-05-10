import React from 'react';
import { getWord } from '../../api/word-api';
import { getTranslation, saveTranslation } from '../../api/translation-api';
import Spinner from '../common/spinner';
import './edit-app.css';

export default class EditApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getWord(this.props.match.params.id, (word) => {
      this.setState({ word: word, loading: !this.state.translation });
    });
    getTranslation(this.props.match.params.id, (translation) => {
      this.setState({ translation: translation, loading: !this.state.word })
    });
  }

  onChangeTranslation = (event) => {
    const translation = this.state.translation;
    translation.translation = event.target.value;

    this.setState({ translation: translation });
  };

  onChangeExample = (event) => {
    const translation = this.state.translation;
    translation.example = event.target.value;

    this.setState({ translation: translation });
  };

  toggleLearnt = (event) => {
    const translation = this.state.translation;
    translation.learnt = !translation.learnt;

    this.setState({ translation: translation });
  };

  onSubmit = (event) => {
    event.preventDefault();
    
    const translation = this.state.translation;
    translation.seen = true;

    console.log('translation', translation);
    saveTranslation(translation);
  };

  renderHelpLink() {
    return (
      <a href={`https://dictionary.cambridge.org/dictionary/german-english/${this.state.word.german}`}>the Campbridge Dictionary</a>
    );
  }

  render = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    console.log(this.state.translation);

    return (
      <div>
        <div className='word german'>{this.state.word.german}</div>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputTranslation">Translation</label>
            <div className="col-sm-10">
              <input
                type="text" 
                className="form-control" 
                id="inputTranslation" 
                value={this.state.translation.translation}
                aria-describedby="translationHelp" 
                onChange={this.onChangeTranslation}
              />
              <small id="translationHelp" className="form-text text-muted">Translate this german word using a dictionary or an online resource like {this.renderHelpLink()}.</small>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputSentence">Sentence</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputSentence"
                value={this.state.translation.example}
                aria-describedby="sentenceHelp"
                onChange={this.onChangeExample}
              />
              <small id="sentenceHelp" className="form-text text-muted">Make up a sentence using the word '{this.state.word.german}'.</small>
            </div>
          </div>
          <div className="form-group form-check row">
            <div className="col-sm-10 offset-sm-2">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="checkLearnt" 
                checked={this.state.translation.learnt}
                aria-describedby="learntHelp" 
                onChange={this.toggleLearnt}
              />
              <label className="form-check-label" htmlFor="checkLearnt">I know this word well</label>
              <small id="learntHelp" className="form-text text-muted">Tick this if you know this word well and you don't want it to appear in reviews.</small>
            </div>
          </div>
          <button onClick={this.onSubmit} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  };
}
