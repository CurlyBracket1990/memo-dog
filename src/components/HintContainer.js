import * as React from 'react'
import { removeBreed } from '../actions/gameData'


export default class HintContainer extends React.Component {

    handleHintRequest = () => {
        
        if (this.props.breeds.length >= 3){
            const otherBreeds = this.props.breeds.filter(breed => breed.name !== this.props.answer.name)
            const index = this.props.data.map(e => e.name).indexOf(otherBreeds[0].name)
            store.dispatch(removeBreed(index))
        }
    }
    
    // how do i use new breed array to render pictures in both game modes, 
    // stefan is putting both modes into one component
    // the development logic structure has changed...
    
    render () {
        var newBreedIntroduced = (this.props.thingy.includes(this.props.correctAnswer) === -1)
        return (
            { newBreedIntroduced &&
            <div className="hint-button">
            <button type="button" 
                    onClick={this.handleHintRequest}>
                Hint
            </button>
        </div>
          }
        )
    }

}

// // ACTION:
// export function removeBreed(index){
//     return {
//         type: REMOVE_BREEDS,
//         index: index
//     }
// }

// // REDUCER:

// case "REMOVE_BREED": {
//     return [...state.slice(0, action.index), 
//             ...state.slice(acttion.index + 1)
//           ]
//   }


// add to code 
 {

}

