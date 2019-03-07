import * as React from 'react'
import { connect } from 'react-redux'
import store from '../store'

class HintContainer extends React.Component {

    handleHintRequest = () => {
        
        if (this.props.breeds.length >= 3){
            const otherBreeds = this.props.breeds.filter(breed => breed.name !== this.props.answer.name)
            const index = this.props.data.map(e => e.name).indexOf(otherBreeds[0].name)
            // store.dispatch(removeBreed(index))
        }
    }
    
    // how do i use new breed array to render pictures in both game modes, 
    // stefan is putting both modes into one component
    // the development logic structure has changed...
    
    render () {
        return (
            !this.props.thingy.includes(this.props.correctAnswer.name) && 
            <div className="hint-button">
            <button type="button" 
                    onClick={this.handleHintRequest}>
                Hint
            </button>
        </div>
         
        )
    }

}

const mapStateToProps = (state) => {
    return {
        thingy: state.score.thingy,
        correctAnswer: state.gameData.correctAnswer
    }
}


export default connect(mapStateToProps)(HintContainer)

