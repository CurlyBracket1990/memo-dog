import * as request from 'superagent'
import { handleCorrect, handleWrong } from '../actions/ScoreAction'

export const SET_BREEDS = 'SET_BREEDS'

export function setBreeds(breeds) {
    return {
        type: SET_BREEDS,
        payload: breeds
    }
}

export function gameData(num, value, breed) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breeds/image/random/${num}`)
            .then(response => {
                const breeds = response.body.message.map((dog) => {
                    const dogBreed = dog.split('/')
                    return { name: dogBreed[4], image: dog }
                })
                if (value === "Correct") {
                    dispatch(setBreeds(breeds))
                    dispatch(handleCorrect(breed))
                }
                if (value === "Wrong") {
                    dispatch(setBreeds(breeds))
                    dispatch(handleWrong(breed))
                }
            })
    }
}