export const SET_SCORE = 'SET_SCORE'

export function setScore(score) {
    return {
        type: SET_SCORE,
        payload: {
               score
        }
    }
}