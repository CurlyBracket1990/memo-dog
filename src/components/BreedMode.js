/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'

export default class BreedMode extends React.Component {

    render() {
        console.log("Breedmode rendered")
        return (
            <div className="breed-name-game">

                <img
                    src={this.props.correctAnswer.image}
                    alt={this.props.correctAnswer.name}
                />
                {this.props.breeds.map((breed) => {
                    return (
                        <div key={breed.name} className="answersBox">
                            <input type="button" onClick={this.props.submitAnswer} value={breed.name}/>
                        </div>
                    )
                })}
                </div>
        )
    }
}


