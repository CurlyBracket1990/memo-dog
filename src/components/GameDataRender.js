import * as React from 'react'
import PictureModeContainer from './PictureModeContainer';
import BreedModeContainer from './BreedModeContainer';
import { handleCorrect, handleWrong } from '../actions/ScoreAction'
import store from '../store'
import { connect } from 'react-redux'


class GameDataRender extends React.Component {

    nextQuestion = (value, breed) => {
        if (value === "Correct") {
            store.dispatch(handleCorrect(breed))
        }
        if (value === "Wrong") {
            store.dispatch(handleWrong(breed))
        }
        // store.dispatch(gameData(3))
    }

    randomize() {
        return Math.random()
    }

    render() {
        const randomNum = this.randomize()
        return (
            <div >
                {this.props.breeds === [] && 'Loading...'}
                {randomNum <= 0.5 && this.props.breeds.length > 0 && <BreedModeContainer breeds={this.props.breeds} nextQuestion={this.nextQuestion} />}
                {randomNum > 0.5 && this.props.breeds.length > 0 && <PictureModeContainer breeds={this.props.breeds} nextQuestion={this.nextQuestion} />}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.gameData
    }
}


export default connect(mapStateToProps)(GameDataRender)
