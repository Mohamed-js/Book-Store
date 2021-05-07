const historyReducer = (state = { patientHistory: {} }, action) => {
  switch (action.type) {
    case 'SAVE_HISTORY':
      return {
        patientHistory: action.payload,
      };

    default:
      return state;
  }
};

export default historyReducer;
