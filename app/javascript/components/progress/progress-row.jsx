import React from 'react';
import Gauge from '../common/gauge';
import YesNo from './yes-no.jsx';
import { withRouter } from 'react-router-dom';

const ProgressRow = (props) => {
  const onRowClick = () => {
    let { history } = props;

    history.push({
      pathname: `/edit/${props.progress.wordId}`,
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-EN", {month: "short", day: "2-digit", year: "numeric"});
  };

  const fullWord = (progress) => {
    if (progress.article) {
      return progress.article + ' ' + progress.german;
    } else {
      return progress.german;
    }
  }
  
  return (
    <tr onClick={onRowClick}>
      <td className="german">{fullWord(props.progress)}</td>
      <td className="level"><Gauge level={props.progress.level} /></td>
      <td className="review-count">{props.progress.review_count}</td>
      <td className="last-review">{formatDate(props.progress.last_review)}</td>
      <td className="learnt"><YesNo yes={props.progress.learnt} /></td>
    </tr>
  );
}

export default withRouter(ProgressRow);
