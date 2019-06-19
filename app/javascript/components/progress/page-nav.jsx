import React from 'react';
import { connect } from 'react-redux';

import { totalPages } from '../../store/progress-selector';
import { setPage, nextPage, previousPage } from '../../store/page-reducer';

const PageNav = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm">
        {renderPreviousButton(props)}
        {renderPageButtons(props)}
        {renderNextButton(props)}
      </ul>
    </nav>
  );
}

const renderPageButtons = (props) => {
  return Array(props.totalPages).fill().map((_a, i) => {
    if (props.pageNo == i + 1) return renderCurrentButton(props);
    return renderOtherButton(props, i+1);
  });
}

const renderPreviousButton = (props) => {
  const previousButtonDisabled = props.pageNo == 1;
  const handleClick = () => props.previousPage();

  return (
    <li key={0} className="page-item">
      <button 
        type="button" 
        className="btn btn-link page-link" 
        disabled={previousButtonDisabled}
        onClick={handleClick}
      >
        &lt;
      </button>
    </li>
  );
};

const renderCurrentButton = (props) => {
  return (
    <li key={props.pageNo} className="page-item active">
      <span className="page-link">
        {props.pageNo}
        <span className="sr-only">(current)</span>
      </span>
    </li>
  );
};

const renderOtherButton = (props, pageNo) => {
  const handleClick = () => props.setPage(pageNo);

  return (
    <li key={pageNo} className="page-item">
      <button
        type="button"
        className="btn btn-link page-link"
        onClick={handleClick}
      >
        {pageNo}
      </button>
    </li>
  );
};

const renderNextButton = (props) => {
  const nextButtonDisabled = props.pageNo == props.totalPages;
  const handleClick = () => props.nextPage();

  return (
    <li key={-1} className="page-item">
      <button 
        type="button" 
        className="btn btn-link page-link" 
        disabled={nextButtonDisabled}
        onClick={handleClick}
      >
        &gt;
      </button>
    </li>
  );  
};

const mapStateToProps = state => {
  return {
    pageNo: state.page.pageNo,
    totalPages: totalPages(state),
  }
};

const mapDispatchToProps = { setPage, nextPage, previousPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNav);
