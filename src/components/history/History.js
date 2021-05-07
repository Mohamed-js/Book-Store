import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Female from './Female';
import Male from './Male';
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/history.css';

import { useDispatch } from 'react-redux';

const History = () => {
  const dispatch = useDispatch();
  const browser = useHistory();
  const [gender, setGender] = useState();
  const [history, setHistory] = useState({
    age: null,
    liver: null,
    kidney: null,
    lactation: null,
    pregnancy: null,
  });

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleInputs = (e) => {
    const propy = e.target.name;
    setHistory({
      ...history,
      [propy]: e.target.value,
    });
  };

  const saveHistory = () => {
    // Validate, Dispatch, then redirect
    dispatch({ type: 'SAVE_HISTORY', payload: history });
    if (history.age && history.kidney && history.liver) {
      browser.push('/complaint');
    }
  };

  return (
    <>
      <h1 className="header default center">Welcome to OTC diagnoser!</h1>
      <h3 className="header secondary center">
        Please follow the steps till the end
      </h3>
      <form className="center dialog">
        <Male handleGender={handleGender} handleInputs={handleInputs} />
        {gender === 'Female' && <Female handleInputs={handleInputs} />}

        <input
          type="button"
          onClick={saveHistory}
          value="Save and continue"
          className="btn default"
        />
      </form>
    </>
  );
};

export default History;
