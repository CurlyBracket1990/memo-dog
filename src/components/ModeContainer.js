import * as React from 'react'
import BreedMode from './BreedMode'
import PictureMode from './PictureMode'
import { connect } from 'react-redux'
import store from '../store'
import { overWriteBreeds, cleanData } from '../actions/gameData'
import { handleCorrect, handleWrong } from '../actions/ScoreAction';
import PopUp from "./popUp";

class BreedModeContainer extends React.Component {

    state = {
        showPopup: false
    }

    togglePopup = () => this.setState({
        showPopup: !this.state.showPopup
    })


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

    submitAnswerPicture = (e) => {
        store.dispatch(cleanData())
        if (e.target.alt === this.props.correctAnswer.name) {
            this.nextQuestion("Correct", this.props.correctAnswer.name)
            this.overWriteBreeds(this.props.score.level * 3)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
    }

    submitAnswerBreed = (e) => {
        store.dispatch(cleanData())
        if (e.target.value === this.props.correctAnswer.name) {
            this.overWriteBreeds(this.props.score.level * 3)
            this.nextQuestion("Correct", this.props.correctAnswer.name)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
    }

    submitAnswerBreedWithKey = (e) => {
        store.dispatch(cleanData())
        if (e.value === this.props.correctAnswer.name) {
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Correct", this.props.correctAnswer.name)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
        return null
    }

    submitAnswerPictureWithKey = (e) => {
        store.dispatch(cleanData())
        if (e.alt === this.props.correctAnswer.name) {
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Correct", this.props.correctAnswer.name)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
        return null
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
                {this.props.breeds.length > 0 &&
                    this.props.breedMode &&
                    <BreedMode
                        level={this.props.score.level}
                        correctAnswer={this.props.correctAnswer}
                        breeds={this.shuffle(this.props.breeds.map(a => ({ ...a })))}
                        submitAnswer={this.submitAnswerBreed}
                        submitAnswerWithKey={this.submitAnswerBreedWithKey}
                    />}
                {this.props.breeds.length > 0 && !this.props.breedMode &&
                    <PictureMode
                        level={this.props.score.level}
                        correctAnswer={this.props.correctAnswer}
                        breeds={this.shuffle(this.props.breeds.map(a => ({ ...a })))}
                        submitAnswer={this.submitAnswerPicture}
                        submitAnswerWithKey={this.submitAnswerPictureWithKey}
                    />}
                {this.state.showPopup ?
                    <PopUp correctAnswer={this.props.correctAnswer}
                    />
                    : null
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        breeds: state.gameData.breeds,
        score: state.score,
        correctAnswer: state.gameData.correctAnswer,
        breedMode: state.gameData.breedMode
    }
}


export default connect(mapStateToProps)(BreedModeContainer)