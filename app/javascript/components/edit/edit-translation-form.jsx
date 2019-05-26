import React from 'react';
import { connect } from 'react-redux';
import { toggleKnown, changeField } from '../../store/edit-translation-reducer';

const EditTranslationForm = (props) => {
  const onToggleKnown = (event) => {
    props.toggleKnown();
  };

  const onChangeExample = (event) => {
    props.changeField({ field: 'example', value: event.target.value });
  };

  const onChangeTranslation = (event) => {
    props.changeField({ field: 'translation', value: event.target.value });
  };

  const renderHelpLink = () => {
    return (
      <a href={`https://dictionary.cambridge.org/dictionary/german-english/${props.word.german}`}>the Campbridge Dictionary</a>
    );
  };

  return (
    <div>
      <div>{props.word.german}</div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="inputTranslation">Translation</label>
        <div className="col-sm-10">
          <input
            type="text" 
            className="form-control" 
            id="inputTranslation" 
            value={props.translation.translation}
            aria-describedby="translationHelp" 
            onChange={onChangeTranslation}
            required
          />
          <small id="translationHelp" className="form-text text-muted">Translate this german word using a dictionary or an online resource like {renderHelpLink()}.</small>
          <div className="invalid-feedback">More example invalid feedback text</div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="inputSentence">Sentence</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputSentence"
            value={props.translation.example}
            aria-describedby="sentenceHelp"
            onChange={onChangeExample}
          />
          <small id="sentenceHelp" className="form-text text-muted">Make up a sentence using the word '{props.word.german}'.</small>
        </div>
      </div>
      <div className="form-group form-check row">
        <div className="col-sm-10 offset-sm-2">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="checkKnown"
            checked={props.translation.known}
            aria-describedby="knownHelp" 
            onChange={onToggleKnown}
          />
          <label className="form-check-label" htmlFor="checkKnown">I know this word well</label>
          <small id="knownHelp" className="form-text text-muted">Tick this if you know this word well and you don't want it to appear in reviews.</small>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = { toggleKnown, changeField }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTranslationForm);
