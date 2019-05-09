import React from 'react';
import { getWord } from '../../api/word-api';
import { getProgress, saveProgress } from '../../api/progress-api';
import Spinner from '../common/spinner';
import './edit-app.css';

export default class EditApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    getWord(this.props.match.params.id, (word) => {
      this.setState({ word: word, loading: !this.state.progress });
    });
    getProgress(this.props.match.params.id, (progress) => {
      this.setState({ progress: progress, loading: !this.state.word })
    });
  }

  onChangeTranslation = (event) => {
    const progress = this.state.progress;
    progress.translation = event.target.value;

    this.setState({ progress: progress });
  };

  onChangeExample = (event) => {
    const progress = this.state.progress;
    progress.example = event.target.value;

    this.setState({ progress: progress });
  };

  toggleLearnt = (event) => {
    const progress = this.state.progress;
    progress.learnt = !progress.learnt;

    this.setState({ progress: progress });
  };

  onSubmit = (event) => {
    event.preventDefault();
    
    const progress = this.state.progress;
    progress.seen = true;

    saveProgress(progress);
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
                value={this.state.progress.translation}
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
                value={this.state.progress.example}
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
                checked={this.state.progress.learnt}
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
