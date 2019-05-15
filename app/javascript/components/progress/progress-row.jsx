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
  
  return (
    <tr key={props.translation.id} onClick={onRowClick}>  
      <td className="german">{props.translation.german}</td>
      <td className="level"><Gauge level={props.translation.level} /></td>
      <td className="learnt"><YesNo yes={props.translation.learnt} /></td>
    </tr>
  );
}

export default withRouter(ProgressRow);
