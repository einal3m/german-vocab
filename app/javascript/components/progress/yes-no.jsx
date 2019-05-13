import React from 'react';

const YesNo = (props) => {
  return (
    <div className="yes-no">
      {renderIcon(props.yes)}
    </div>
  );
}

const renderIcon = (yes) => {
  if (yes) {
    return <span className='yes'>&#10004;</span>;
  } else {
    return <span className='no'></span>;
  }
}

export default YesNo;
