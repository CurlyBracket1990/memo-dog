import * as request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'

export function setBreeds(dog) {
    return {
        type: SET_BREEDS,
        payload: {
               breed: dog.breed,
               image: dog.image
        }
    }
}

export function gameData(num) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breeds/image/random/${num}`)
            .then(response => {
                const breeds = response.body.message.map((dog) => {
                    const dogBreed = dog.split('/')
                    return { breed: dogBreed[4], image: dog }
                })
                breeds.map((dog) => {
                   return dispatch(setBreeds(dog))
                })
            })
    }
}