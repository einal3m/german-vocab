import React from 'react';
import ProgressRow from './progress-row';

const ProgressTable = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col" className="german">german</th>
          <th scope="col" className="level">level</th>
          <th scope="col" className="learnt">learnt</th>
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
