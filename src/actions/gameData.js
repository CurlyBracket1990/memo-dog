import * as request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'
export const OVERWRITE_BREEDS = 'OVERWRITE_BREEDS'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const REMOVE_BREED = 'REMOVE_BREED'
export const CLEAN_DATA = 'CLEAN_DATA'

export function newData(breeds, breedMode) {
    return {
        type: OVERWRITE_BREEDS,
        payload: { breeds, correctAnswer: breeds[0], breedMode}
    }
}

export function cleanData() {
    return {
        type: CLEAN_DATA
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
                const breedMode = (Math.random() > 0.5);
                dispatch(newData(breeds, breedMode))
            })
    }
}
