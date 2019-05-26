import React from 'react';
import Gauge from '../common/gauge';
import YesNo from './yes-no.jsx';
import { withRouter } from 'react-router-dom';
import { fullWord, displayDate } from '../common/format';

const ProgressRow = (props) => {
  const onRowClick = () => {
    let { history } = props;

    history.push({
      pathname: `/edit/${props.progress.wordId}`,
    });
  };

  return (
    <tr onClick={onRowClick}>
      <td>
        <div className="german">{fullWord(props.progress)}</div>
        <div className="example">{props.progress.example}</div>
      </td>
      <td className="level"><Gauge level={props.progress.level} /></td>
      <td className="review-count">{props.progress.reviewCount}</td>
      <td className="last-review">{displayDate(props.progress.lastReview)}</td>
      <td className="learnt"><YesNo yes={props.progress.learnt} /></td>
    </tr>
  );
}

export default withRouter(ProgressRow);
