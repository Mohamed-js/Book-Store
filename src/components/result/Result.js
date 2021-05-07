import React from 'react';
import { useSelector } from 'react-redux';
import addHistory from './addHistory';
import addDiseases from './addDiseases';
import useApi from '../hooks/useApi';
import processDrugs from './processDrugs';
import { Tabs, Tab } from 'react-bootstrap';
import TabContent from './TabContent';

const Result = () => {
  let drugs = [];
  const result = useSelector((state) => state);
  const symptoms = result.symptoms.patientSymptoms[0];

  let query = `age <= ${result.history.patientHistory.age}`;
  query = addHistory(result, query);
  query = addDiseases(result, query);

  // for (let i = 0; i < symptoms.length; i += 1) {
  //   const fQuery = query + `AND indications LIKE '%${symptoms[i]}%'`;
  //   const { qa } = useApi({ query: fQuery });
  //   drugs.push([qa]);
  // }
  symptoms.forEach((x) => {
    const fQuery = query + `AND indications LIKE '%${x}%'`;
    /* eslint-disable-next-line */
    const { qa } = useApi({ query: fQuery });
    drugs.push([qa]);
  });

  drugs = processDrugs(drugs);

  const categories = [];

  if (drugs[0]) {
    drugs[0].forEach((arr, i) => {
      categories.push(drugs.map((category) => category[i]));
    });
  }

  return (
    <div>
      <h1 className="header default center">Recommendations</h1>
      <br />
      <Tabs id="tab">
        {categories.map((category, i) => {
          let line = '1st';
          if (i === 1) line = '2nd';
          if (i === 2) line = '3nd';
          if (i > 2) line = `${i}th`;
          line += ' line ';
          return (
            <Tab eventKey={line} title={line}>
              <TabContent cat={category} />
            </Tab>
          );
        })}
      </Tabs>
      <div className="text-center">
        <button className="btn default p-2">Done</button>
      </div>
    </div>
  );
};

export default Result;
