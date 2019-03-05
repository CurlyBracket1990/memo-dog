export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_BREEDS": {
        return action.payload
      }
      default:
        return state
    }
  }