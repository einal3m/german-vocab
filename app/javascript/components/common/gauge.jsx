import React from 'react';
import './gauge.css';

const Gauge = (props) => {
  return (
    <div className="gauge">
      {renderIcons(props.level)}
    </div>
  );
}

const renderIcons = (level) => {
  const icons = [];

  for (let i = 1; i <= 5; i++) {
    icons.push(i <= level ? renderFull(i) : renderEmpty(i));
  }

  return icons;
}

const renderFull = (i) => {
  return <span key={i} className="dot filled"></span>;
};

const renderEmpty = (i) => {
  return <span key={i} className="dot hollow"></span>;
};

export default Gauge;
