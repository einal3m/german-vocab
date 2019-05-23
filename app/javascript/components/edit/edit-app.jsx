import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../api/word-api';
import { getTranslation, saveTranslation } from '../../api/translation-api';
import { fetchTranslation } from '../../store/translation-actions';
import { fetchWords } from '../../store/word-actions';
import { storeWordId } from '../../store/edit-translation-reducer';
import { wordForEditTranslation } from '../../store/edit-translation-selector';
import { loading } from '../../store/loading-selector';
import Spinner from '../common/spinner';
import './edit-app.css';

class EditApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const wordId = this.props.match.params.id;

    this.props.fetchWords();
    this.props.fetchTranslation(wordId);
    this.props.storeWordId(wordId);
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

  toggleKnown = (event) => {
    const translation = this.state.translation;
    translation.known = !translation.known;

    this.setState({ translation: translation });
  };

  onSubmit = (event) => {
    event.preventDefault();
    saveTranslation(this.state.translation);
  };

  loading = () => {
    return !this.props.translation || !this.props.word;
  }

  renderHelpLink() {
    return (
      <a href={`https://dictionary.cambridge.org/dictionary/german-english/${this.state.word.german}`}>the Campbridge Dictionary</a>
    );
  }

  render = () => {
    if (this.loading()) {
      return <Spinner />;
    }

    return <div>Edit App</div>;

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
                id="checkKnown" 
                checked={this.state.translation.known}
                aria-describedby="knownHelp" 
                onChange={this.toggleKnown}
              />
              <label className="form-check-label" htmlFor="checkKnown">I know this word well</label>
              <small id="knownHelp" className="form-text text-muted">Tick this if you know this word well and you don't want it to appear in reviews.</small>
            </div>
          </div>
          <button onClick={this.onSubmit} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translation: state.editTranslation.translation,
    word: wordForEditTranslation(state),
  }
}

const mapDispatchToProps = { fetchWords, fetchTranslation, storeWordId }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditApp);
