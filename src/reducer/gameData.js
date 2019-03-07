const initialState = {breeds: [], correctAnswer: {}}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case "OVERWRITE_BREEDS": {
        return {...state, breeds: action.payload.breeds, correctAnswer: action.payload.correctAnswer}
      }
      default:
        return state
    }
  }