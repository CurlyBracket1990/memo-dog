const initialState = {totalScore: 0, streakCounter: 0, totalQuestions: 0, thingy: [], correctAnswers: 0}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_SCORE": {
      return {...state, totalScore: action.payload.score}
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
   case "RESET_STREAK": {
    return (
     {...state, 
       streakCounter: 0, 
       }
   )
  }
    default:
      return state
  }
}