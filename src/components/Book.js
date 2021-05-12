import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, category, handleClick,
  } = props;

  return (
    <div className="book flex-row">
      <div className="w-33">
        <p className="b-category">{category}</p>
        <p className="b-title">{title}</p>
        <p className="f-blue">Mohamed Atef</p>
        <div className="btns">
          <button type="button" className="f-blue btn">
            Comments
          </button>
          |
          <button
            className="f-blue btn"
            type="button"
            value={id}
            onClick={handleClick}
          >
            Remove
          </button>
          |
          <button type="button" className="f-blue btn">
            Edit
          </button>
        </div>
      </div>
      <div className="flex-row w-66">
        <div className="flex-row completed">
          <div>
            <div className="circle"> </div>
          </div>
          <div>
            <h2>75%</h2>
            <p className="b-category">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="b-category">Current Chapter</p>
          <h6>Chapter 17</h6>
          <button type="button" className="update-btn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleClick: PropTypes.func,
};

Book.defaultProps = {
  id: '1',
  title: 'empty',
  category: 'default',
  handleClick: () => 0,
};

export default Book;
