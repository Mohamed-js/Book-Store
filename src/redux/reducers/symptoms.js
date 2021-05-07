const symptomsReducer = (state = { patientSymptoms: [] }, action) => {
  switch (action.type) {
    case 'SAVE_SYMPTOMS':
      return {
        patientSymptoms: action.payload,
      };

    default:
      return state;
  }
};

export default symptomsReducer;
