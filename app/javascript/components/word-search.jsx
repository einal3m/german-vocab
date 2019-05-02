import React from 'react';

export default class WordSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  onChange = (event) => {
  	this.setState({ search: event.target.value });
  };

  onSubmit = (event) => {
  	event.preventDefault();
  	this.props.onSearch(this.state.search);
  };

  render() {
    return (
      <form className="search-form">
        <input
          type="text"
          className="input"
          id="searchInput"
          value={this.state.search}
          placeholder="Type german word here..."
          onChange={this.onChange}
        />
        <button className="button is-info" onClick={this.onSubmit}>
          Find
        </button>
      </form>
    );
  }
}
