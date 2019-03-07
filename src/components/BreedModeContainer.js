import * as React from 'react'
import BreedMode from './BreedMode'
import { connect } from 'react-redux'
import { overWriteBreeds } from '../actions/gameData'
import { handleCorrect, handleWrong } from '../actions/ScoreAction';
import store from '../store'

class BreedModeContainer extends React.Component {

    overWriteBreeds = (num) => {
        store.dispatch(overWriteBreeds(num))
    }

    nextQuestion = (value, breed) => {
        if (value === "Correct") {
            store.dispatch(handleCorrect(breed))
        }
        if (value === "Wrong") {
            store.dispatch(handleWrong(breed))
        }
    }

    componentDidMount() {
        store.dispatch(overWriteBreeds(3))
    }

    submitAnswer = (e) => {
        if (e.target.value === this.props.correctAnswer.name) {
            setTimeout(() => {
                this.overWriteBreeds(this.props.score.level*3)
                this.nextQuestion("Correct", this.props.correctAnswer.name)
            }, 200)
        } else {
            setTimeout(() => {
                this.overWriteBreeds(this.props.score.level*3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 200)
        }
    }   

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    render() {
        return (
            <div>
                {this.props.breeds.length > 0 && <BreedMode
                level={this.props.score.level}
                overWriteBreeds={this.overWriteBreeds}
                correctAnswer={this.props.correctAnswer}
                breeds={this.shuffle(this.props.breeds.map(a => ({...a})))}
                submitAnswer={this.submitAnswer}
            />}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        breeds: state.gameData.breeds,
        score: state.score,
        correctAnswer: state.gameData.correctAnswer
    }
}


export default connect(mapStateToProps)(BreedModeContainer)