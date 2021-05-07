import React from 'react';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Exclusion = (props) => {
  const { disease } = useParams();
  const browser = useHistory();
  const dispatch = useDispatch();
  const [diseases, setDiseases] = useState([]);

  // Redirect to result
  const saveDiseases = () => {
    dispatch({ type: 'SAVE_DISEASES', payload: [disease, ...diseases] });
    browser.push('/result');
  };

  const handleInputs = (e) => {
    const propy = e.target.name;
    setDiseases([...diseases, propy]);
  };

  return (
    <main>
      {props.qa.answers.map((answer) => {
        const ans = answer.answer.split(' ').join('_');
        return (
          <div className="flex-row default p-2 rounded m-3">
            <label name={answer.answer}>{answer.answer.toUpperCase()}</label>
            <input
              onChange={handleInputs}
              type="checkbox"
              name={ans}
              value={ans}
            />
          </div>
        );
      })}
      <button onClick={saveDiseases} className="btn default mt-4 m-auto">
        GetResults
      </button>
    </main>
  );
};

export default Exclusion;
