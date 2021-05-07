const addDiseases = (result, query) => {
  for (let i = 1; i < result.diseases.patientDiseases.length; i++) {
    const item = result.diseases.patientDiseases[i];
    query += ` AND ${item} = 'true'`;
  }
  query += ` AND diseases LIKE '%${result.diseases.patientDiseases[0]}%'`;

  return query;
};

export default addDiseases;
