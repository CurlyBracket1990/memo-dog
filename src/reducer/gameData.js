export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_BREEDS": {
        return state.concat(action.payload)
      }
      default:
        return state
    }
  }