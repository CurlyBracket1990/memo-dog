export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_BREEDS": {
        return [...state, action.payload]
      }
      default:
        return state
    }
  }