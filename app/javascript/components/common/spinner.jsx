import React from 'react';
import './spinner.css';

const Spinner = (props) => {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
