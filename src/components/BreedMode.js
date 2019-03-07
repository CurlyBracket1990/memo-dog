/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import HintContainer from './HintContainer'

export default class BreedMode extends React.Component {

    state = { mode: "pictureMode", opacity: 1, incorrectAnswer: [] }

    componentDidMount() {
        this.setIncorrect()
    }

    componentDidUpdate(prevProps){
        if(this.props.correctAnswer.image !== prevProps.correctAnswer.image){
            this.setIncorrect()
            this.setState({
                opacity: 1
            })
        }
    }

    setIncorrect = () => {
        const incorrect = this.props.breeds.filter((breed) =>
            breed.name !== this.props.correctAnswer.name
        )
        this.setState({
            incorrectAnswer: incorrect[Math.floor(Math.random() * incorrect.length)]
        })
    }

    hintHighlight = () => {
        this.setState({
            opacity: 0.3
        })
    }

    render() {
        console.log("Breedmode rendered")
        return (
            <div className="breed-name-game">

                <img
                    src={this.props.correctAnswer.image}
                    alt={this.props.correctAnswer.name}
                />
                {this.props.breeds.map((breed, index) => 
                    breed.name === this.state.incorrectAnswer.name ?
                        <div style={{ opacity: this.state.opacity }} key={index + 1} className="answersBox">
                            <input type="button" onClick={this.props.submitAnswer} value={breed.name} />
                        </div>
                        :
                        <div key={index + 1} className="answersBox">
                            <input type="button" onClick={this.props.submitAnswer} value={breed.name} />
                        </div>
                )}
                <HintContainer hintHighlight={this.hintHighlight} />
            </div>
        )
    }
}


