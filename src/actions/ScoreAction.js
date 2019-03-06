export const SET_SCORE = 'SET_SCORE'
export const HANDLE_CORRECT = 'HANDLE_CORRECT'
export const HANDLE_WRONG = 'HANDLE_WRONG'
export const RESET_STREAK = 'RESET_STREAK'

export function setScore(score) {
    return {
        type: SET_SCORE,
        payload: {
               score
        }
    }
}

export function resetStreak() {
    return {
        type: RESET_STREAK
    }
}

export function handleCorrect(name) {
    return {
        type: HANDLE_CORRECT,
        payload: {
            name
        }
    }
}

export function handleWrong(name) {
    return {
        type: HANDLE_WRONG,
        payload: {
            name
        }
    }
}