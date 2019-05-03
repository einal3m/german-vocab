import React from 'react';
import { Link } from 'react-router-dom';

export default class WordRow extends React.Component {
  onEdit = () => {

  };

  render = () => {
    return (
      <div>
        {this.props.word.german}
        <Link to={`/edit/${this.props.word.id}`}>Edit</Link>
      </div>
    );
  };
}
