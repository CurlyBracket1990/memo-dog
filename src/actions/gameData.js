import * as request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'
export const OVERWRITE_BREEDS = 'OVERWRITE_BREEDS'

export function setBreeds(breeds) {
    return {
        type: SET_BREEDS,
        payload: breeds
    }
}

export function newData(breeds) {
    return {
        type: OVERWRITE_BREEDS,
        payload: breeds
    }
}

export function gameData(num) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breeds/image/random/${num}`)
            .then(response => {
                const breeds = response.body.message.map((dog) => {
                    const dogBreed = dog.split('/')
                    return { name: dogBreed[4], image: dog }
                })
                dispatch(setBreeds(breeds))
            })
    }
}

export function overWriteBreeds(num) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breeds/image/random/${num}`)
            .then(response => {
                const breeds = response.body.message.map((dog) => {
                    const dogBreed = dog.split('/')
                    return { name: dogBreed[4], image: dog }
                })
                dispatch(newData(breeds))
            })
    }
}
