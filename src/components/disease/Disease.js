import React from 'react';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useDialog from '../hooks/useDialog';
import Exclusion from './Exclusion';
import { Ellipsis } from 'react-spinners-css';

const Disease = () => {
  const { disease } = useParams();
  const browser = useHistory();
  const [question, setQuestion] = useState(`1-${disease}`);

  const answerClick = (e) => {
    const val = e.target.value.split('/');
    if (val.length === 2) {
      // refer
      browser.push('/refer/' + val[1]);
    }
    // another question

    setQuestion(val[3]);
  };
  let { qa, isPending, error } = useDialog(question);
  return (
    <div className="center d-flex flex-column">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <Ellipsis color="#be97e8" />
        </div>
      )}
      {qa && (
        <h1 className="p-3 default header center w-100">
          {qa[0].question.toUpperCase()}
        </h1>
      )}
      {qa &&
        qa[0].q_type === 'choice' &&
        qa[0].answers.map((answer) => {
          return (
            <button
              onClick={answerClick}
              value={answer.target}
              className="btn default p-2 m-3">
              {answer.answer.toUpperCase()}
            </button>
          );
        })}
      {qa && qa[0].q_type === 'multible' && <Exclusion qa={qa[0]} />}
    </div>
  );
};

export default Disease;
