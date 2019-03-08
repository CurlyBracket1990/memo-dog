/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import HintContainer from './HintContainer'

export default class BreedMode extends React.Component {

    state = { mode: "pictureMode", opacity: 1, incorrectAnswer: [] }

    componentDidUpdate(prevProps){
        if(this.props.correctAnswer.image !== prevProps.correctAnswer.image){
            this.setState({
                opacity: 1
            })
        }
    }


    hintHighlight = () => {
        const incorrect = this.props.breeds.filter((breed) =>
            breed.name !== this.props.correctAnswer.name)
        this.setState({
            opacity: 0.3,
            incorrectAnswer: incorrect[Math.floor(Math.random() * incorrect.length)]
        })
    }

    render() {
        return (
            <div className="breed-name-game">

                <img
                    src={this.props.correctAnswer.image}
                    alt={this.props.correctAnswer.name}
                />
                <div className='breedAnswers'> 
                {this.props.breeds.map((breed, index) => 
                    breed.name === this.state.incorrectAnswer.name ?
                        <div style={{ opacity: this.state.opacity }} key={index + 1}>
                            <input className='answer' type="button" onClick={this.props.submitAnswer} value={breed.name} />
                        </div>
                        :
                        <div key={index + 1}>
                            <input className='answer' type="button" onClick={this.props.submitAnswer} value={breed.name} />
                        </div>
                )}
                </div>
                <HintContainer hintHighlight={this.hintHighlight} />
            </div>
        )
    }
}


