import React from 'react';

export default class Word extends React.Component {
  onEdit = () => {

  };

  render = () => {
    return (
      <div>
        {this.props.word.german}
        <button className="button is-info" onClick={this.onEdit}>
          Edit
        </button>
      </div>
    );
  };
}
