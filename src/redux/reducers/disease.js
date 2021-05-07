const diseaseReducer = (state = { patientDiseases: [] }, action) => {
  switch (action.type) {
    case 'SAVE_DISEASES':
      return {
        patientDiseases: action.payload,
      };

    default:
      return state;
  }
};

export default diseaseReducer;
