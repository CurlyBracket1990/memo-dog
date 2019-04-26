const initialState = { totalScore: 0, streakCounter: 10, totalQuestions: 0, thingy: [], correctAnswers: 0, level: 1 }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_SCORE": {
      return { ...state, totalScore: action.payload.score }
    }
    case "HANDLE_CORRECT": {
      return (
        {
          ...state,
          streakCounter: state.streakCounter - 1,
          totalQuestions: state.totalQuestions + 1,
          correctAnswers: state.correctAnswers + 1,
          thingy: state.thingy.concat(action.payload.name)
        }
      )
    }
    case "HANDLE_WRONG": {
      return (
        {
          ...state,
          streakCounter: 10,
          totalQuestions: state.totalQuestions + 1,
          thingy: state.thingy.concat(action.payload.name)
        }
      )
    }
    case "RESET_STREAK": {
      return (
        {
          ...state,
          streakCounter: 10,
        }
      )
    }
    case "LEVEL_SELECT": {
      return { ...state, level: action.payload }
    }
    case "CLEAN_STATS": {
      return initialState
    }
    default:
      return state
  }
}