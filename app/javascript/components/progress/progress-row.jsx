import React from 'react';
import Gauge from '../common/gauge';
import YesNo from './yes-no.jsx';
import { withRouter } from 'react-router-dom';

const ProgressRow = (props) => {
  const onRowClick = () => {
    let { history } = props;

    history.push({
      pathname: `/edit/${props.translation.word_id}`,
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-EN", {month: "short", day: "2-digit", year: "numeric"});
  };
  
  return (
    <tr key={props.translation.id} onClick={onRowClick}>  
      <td className="german">{props.translation.german}</td>
      <td className="level"><Gauge level={props.translation.level} /></td>
      <td className="review-count">{props.translation.review_count}</td>
      <td className="last-review">{formatDate(props.translation.last_review)}</td>
      <td className="learnt"><YesNo yes={props.translation.learnt} /></td>
    </tr>
  );
}

export default withRouter(ProgressRow);
