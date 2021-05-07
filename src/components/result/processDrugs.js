const processDrugs = (drugs) => {
  const cleanedDrugs = [];
  drugs.forEach((arr) => {
    if (arr[0] !== null && arr[0].length !== 0) {
      cleanedDrugs.push(arr[0]);
    }
  });

  const lengths = cleanedDrugs.map((a) => a.length);
  const biggest = cleanedDrugs[lengths.indexOf(Math.max(...lengths))];

  cleanedDrugs.forEach((arr) => {
    const sub = biggest.length - arr.length;
    const last = arr[arr.length - 1];
    for (let i = 0; i < sub; i++) {
      arr.push(last);
    }
  });

  return cleanedDrugs;
};

export default processDrugs;
