import * as request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'
export const OVERWRITE_BREEDS = 'OVERWRITE_BREEDS'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const REMOVE_BREED = 'REMOVE_BREED'

export function newData(breeds) {
    return {
        type: OVERWRITE_BREEDS,
        payload: { breeds, correctAnswer: breeds[0] }
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
                dispatch(newData(breeds))
            })
    }
}

