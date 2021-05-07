import React from 'react';

const Female = (props) => {
  return (
    <>
      {' '}
      <div className="group">
        <h3>Lactating?</h3>
        <div className="flex-row radio-group">
          <label>Yes</label>
          <input
            type="radio"
            name="lactation"
            value="true"
            onChange={props.handleInputs}
          />
          <label>No</label>
          <input
            type="radio"
            name="lactation"
            value="false"
            onChange={props.handleInputs}
          />
        </div>
      </div>
      <div className="group">
        <h3>Pregnant?</h3>
        <div className="flex-row radio-group">
          <label>Yes</label>
          <input
            type="radio"
            name="pregnancy"
            value="true"
            onChange={props.handleInputs}
          />
          <label>No</label>
          <input
            type="radio"
            name="pregnancy"
            value="false"
            onChange={props.handleInputs}
          />
        </div>
      </div>
    </>
  );
};

export default Female;
