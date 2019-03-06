export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_BREEDS": {
        return state.concat(action.payload)
      }
      case "OVERWRITE_BREEDS": {
        return action.payload
      }
      default:
        return state
    }
  }