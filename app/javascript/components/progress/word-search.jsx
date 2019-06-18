import React from 'react';
import { connect } from 'react-redux';

import { changeSearchText, startTextSearch, clearTextSearch } from '../../store/search-reducer';

const WordSearch = (props) => {

  const onChange = (event) => {
    props.changeSearchText(event.target.value);
  };

  const onSubmit = () => {
    event.preventDefault();
    props.startTextSearch();
  };

  const onClear = () => {
    props.clearTextSearch();
  };

  const formClearClass = props.searchText != '' ? '' : 'd-none';

  return (
    <form className="search-form form-inline float-lg-right">
      <div className="form-group position-relative">
        <input 
          type="text" 
          className="form-control" 
          id="searchInput" 
          placeholder="search..."
          value={props.searchText}
          onChange={onChange}
        />
        <span class={`form-clear ${formClearClass}`} onClick={onClear}>&#x2715;</span>
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>&#x1F50E;</button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    searchText: state.search.editSearchText,
  }
};

const mapDispatchToProps = { changeSearchText, startTextSearch, clearTextSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordSearch);
