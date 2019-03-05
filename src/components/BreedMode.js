/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'

export default class BreedMode extends React.Component {

    state = { name: this.props.breeds[0].name, image: this.props.breeds[0].image }

    submitAwnser = (e) => {
        console.log(e.target.value)
        if (e.target.value === this.state.name) {
            setTimeout(() => {
                this.props.nextQuestion("Correct")
            }, 100)
            //Add to streakcounter and totalcounter
        } else {
            setTimeout(() => {
                this.props.nextQuestion("Wrong")
            }, 100)
            //Reset streakcounter
        }
    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

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

            <div className="breed-name-game">

                <img
                    src={this.state.image}
                    alt={this.state.name}
                />
                <form>
                    {this.props.breeds.map(breed => {
                        return (<div key={breed.name} className="radio">
                            <label>
                                <input onClick={this.submitAwnser} type="radio"
                                    name="dog-names"
                                    value={breed.name}
                                    // checked = {false}
                                    // onChange={ this.handleOptionChange} 
                                    className="dog-names-input"
                                />
                                {breed.name}
                            </label>
                        </div>
                        )
                    })}

                </form>

            </div>
        )
    }
}


