import React from 'react';

const Male = (props) => {
  return (
    <>
      {' '}
      <div className="group">
        <h3>Age</h3>
        <input name="age" onChange={props.handleInputs}></input>
      </div>
      <div className="group">
        <h3>Gender</h3>
        <div className="flex-row radio-group">
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={props.handleGender}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={props.handleGender}
          />
        </div>
      </div>
      <div className="group">
        <h3>Had a previous history with liver disease?</h3>
        <div className="flex-row radio-group">
          <label>Yes</label>
          <input
            type="radio"
            name="liver"
            value="true"
            onChange={props.handleInputs}
          />
          <label>No</label>
          <input
            type="radio"
            name="liver"
            value="false"
            onChange={props.handleInputs}
          />
        </div>
      </div>
      <div className="group">
        <h3>Had a previous history with kidney disease?</h3>
        <div className="flex-row radio-group">
          <label>Yes</label>
          <input
            type="radio"
            name="kidney"
            value="true"
            onChange={props.handleInputs}
          />
          <label>No</label>
          <input
            type="radio"
            name="kidney"
            value="false"
            onChange={props.handleInputs}
          />
        </div>
      </div>{' '}
    </>
  );
};

export default Male;
