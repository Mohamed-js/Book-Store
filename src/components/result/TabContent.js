import React from 'react';
import { useSelector } from 'react-redux';

const TabContent = (props) => {
  const result = useSelector((state) => state);
  const age = result.history.patientHistory.age;

  const { cat } = props;
  return cat.map((drug) => {
    let dose = '';
    let freq = '';
    const rSortedDoses = drug.doses.sort((a, b) => b.age - a.age);

    for (let i = 0; i < rSortedDoses.length; i++) {
      if (rSortedDoses[i].age <= age) {
        dose = rSortedDoses[i];
        freq = dose.frequency.split(',');
        break;
      }
    }

    return (
      <div className="drug default">
        <div className="flex-row drug">
          {drug && drug.name && (
            <h3 className="drug-name"> {drug.name.toUpperCase()}</h3>
          )}
          {dose && dose.dose && <h3 className="drug-dose"> {dose.dose}</h3>}
        </div>
        <div className="drug">
          {dose && dose.frequency && (
            <>
              <h5 className="drug-dose text-center"> {freq[0]}</h5>
              <h5 className="drug-dose text-center">
                {' '}
                {`${freq[1][0].toUpperCase()}${freq[1].slice(1)}`}
              </h5>
            </>
          )}
        </div>
      </div>
    );
  });
};

export default TabContent;
