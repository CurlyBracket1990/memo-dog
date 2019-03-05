import { combineReducers } from 'redux'
import breeds from './gameData'
import score from './score'

export default combineReducers({
   breeds,
   score
})