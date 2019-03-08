const initialState = {breeds: [], correctAnswer: {}, breedMode:''}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case "OVERWRITE_BREEDS": {
        return {...state, breeds: action.payload.breeds, correctAnswer: action.payload.correctAnswer, 
        breedMode: action.payload.breedMode}
      }
      case 'CLEAN_DATA': {
        return {...state, breeds: {}}
      }
      default:
        return state
    }
  }