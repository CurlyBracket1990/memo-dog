const initialState = {totalScore: null, streakCounter: null, totalQuestions: null, thingy: [], correctAnswers: null}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_SCORE": {
      return {...state, totalScore: action.payload}
    }
    case "HANDLE_CORRECT": {
      return (
        {...state, 
          streakCounter: state.streakCounter + 1, 
          totalQuestions: state.totalQuestions + 1, 
          correctAnswers: state.correctAnswers + 1, 
          thingy: state.thingy.concat(action.payload.name)}
      )
    }
    case "HANDLE_WRONG": {
     return (
      {...state, 
        streakCounter: 0, 
        totalQuestions: state.totalQuestions + 1,  
        thingy: state.thingy.concat(action.payload.name)}
    )
   }
    default:
      return state
  }
}