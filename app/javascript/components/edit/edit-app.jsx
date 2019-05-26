import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../common/spinner';
import EditTranslationForm from './edit-translation-form';

import { fetchTranslation, saveTranslation } from '../../store/translation-actions';
import { fetchWords } from '../../store/word-actions';
import { storeWordId } from '../../store/edit-translation-reducer';
import { wordForEditTranslation } from '../../store/edit-translation-selector';
import { loading } from '../../store/loading-selector';
import { fullWord } from '../common/format';

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

  onSubmit = (event) => {
    event.preventDefault();
    this.props.saveTranslation();
  }

  loading = () => {
    return this.props.loading || !this.props.translation || !this.props.word;
  }

  render = () => {
    if (this.loading()) {
      return <Spinner />;
    }

    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h1>Translate</h1>
          <div className="card">
            <h5 className="card-header">{fullWord(this.props.word)}</h5>
            <div className="card-body">
              <form>
                <EditTranslationForm word={this.props.word} translation={this.props.translation} />
              </form> 
            </div>
            <div className="card-footer">
              <button id="my-button" onClick={this.onSubmit} className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translation: state.editTranslation.translation,
    word: wordForEditTranslation(state),
    loading: loading(state),
  }
}

const mapDispatchToProps = { fetchWords, fetchTranslation, storeWordId, saveTranslation }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditApp);
