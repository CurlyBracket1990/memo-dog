import { combineReducers } from 'redux'
import gameData from './gameData'
import score from './score'

export default combineReducers({
   gameData,
   score
})