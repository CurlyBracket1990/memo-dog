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
                    const rawDogBreed = dog.split('/')[4]
                    const dogBreed = (rawDogBreed.includes("-") 
                    ? rawDogBreed.split('-')[0]
                    : rawDogBreed)
                    const formattedDogBreed = dogBreed.slice(0,1).toUpperCase() 
                                         + dogBreed.slice(1,)
                    return { name: formattedDogBreed, image: dog }
                })
                const breedMode = (Math.random() > 0.5);
                dispatch(newData(breeds, breedMode))
            })
    }
}

