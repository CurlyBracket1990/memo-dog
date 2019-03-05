export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_SCORE": {
        return [...state, action.payload]
      }
      default:
        return state
    }
  }