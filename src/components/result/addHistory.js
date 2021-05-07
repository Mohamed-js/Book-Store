const addHistory = (result, query) => {
  // GET HISTORY
  const liver = ['liver', result.history.patientHistory.liver];
  const kidney = ['kidney', result.history.patientHistory.kidney];
  const lactation = ['lactation', result.history.patientHistory.lactation];
  const pregnancy = ['pregnancy', result.history.patientHistory.pregnancy];
  // ARRANGE HISTORY
  const historyArr = [liver, kidney, lactation, pregnancy];
  // ADD TO QUERY
  historyArr.forEach((item) => {
    if (item[1] === 'true') {
      query += ` AND ${item[0]} = 'true'`;
    }
  });

  return query;
};

export default addHistory;
