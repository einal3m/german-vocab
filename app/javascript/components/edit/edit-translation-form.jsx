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
      <div className="form-group">
        <label htmlFor="inputTranslation">Translation</label>
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
      </div>
      <div className="form-group">
        <label htmlFor="inputSentence">Sentence</label>
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
      <div className="form-group form-check">
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
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = { toggleKnown, changeField }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTranslationForm);
