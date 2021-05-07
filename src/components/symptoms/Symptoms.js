import React from 'react';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useSymptoms from '../hooks/useSymptoms';
import { Ellipsis } from 'react-spinners-css';

const Symptoms = () => {
  const { disease } = useParams();
  const browser = useHistory();
  const dispatch = useDispatch();
  const [symptoms, setSymptoms] = useState([]);
  const { qa, isPending, error } = useSymptoms(`${disease}`);

  // Redirect to result
  const saveSymptoms = () => {
    dispatch({ type: 'SAVE_SYMPTOMS', payload: [symptoms] });
    browser.push('/disease/' + disease);
  };

  const handleInputs = (e) => {
    const propy = e.target.name;
    setSymptoms([...symptoms, propy]);
  };

  return (
    <main className="text-center">
      <>
        <h1 className="header default center">Select symptoms you have...</h1>
        {error && <div>{error}</div>}
        {isPending && (
          <div>
            <Ellipsis color="#be97e8" />
          </div>
        )}
        {qa &&
          qa[0].symptoms &&
          qa[0].symptoms.map((symptom) => {
            return (
              <div className="flex-row row-max">
                <label name={symptom.getName}>{symptom.name}</label>
                <input
                  onChange={handleInputs}
                  type="checkbox"
                  name={symptom.get_name}
                  value={symptom.name}
                />
              </div>
            );
          })}
        <button onClick={saveSymptoms} className="btn default m-auto">
          Continue
        </button>
      </>
    </main>
  );
};

export default Symptoms;
