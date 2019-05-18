import React from 'react';
import ProgressRow from './progress-row';

const ProgressTable = (props) => {
  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="german">GERMAN</th>
          <th scope="col" className="level">LEVEL</th>
          <th scope="col" className="review-count">NO. REVIEWS</th>
          <th scope="col" className="last-review">LAST REVIEWED</th>
          <th scope="col" className="learnt">LEARNT</th>
        </tr>
      </thead>
      <tbody>
        {renderRows(props.translations)}
      </tbody>
    </table>
  );
}

const renderRows = (translations) => {
  return translations.map(translation => (
    <ProgressRow key={translation.id} translation={translation} />
  )); 
};

export default ProgressTable;
