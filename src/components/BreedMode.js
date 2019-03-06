/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'

export default class BreedMode extends React.Component {

    state = { name: this.props.breeds[0].name, image: this.props.breeds[0].image }

    submitAwnser = (e) => {
        if (e.target.value === this.state.name) {
            setTimeout(() => {
                this.props.overWriteBreeds(3)
                this.props.nextQuestion("Correct", this.state.name)
                const shuffledArray = this.shuffle(this.props.breeds)
                this.setState({
                    name: shuffledArray[0].name,
                    image: shuffledArray[0].image
                })
            }, 200)
        } else {
            setTimeout(() => {
                this.props.overWriteBreeds(3)
                this.props.nextQuestion("Wrong", this.state.name)
                const shuffledArray = this.shuffle(this.props.breeds)
                this.setState({
                    name: shuffledArray[0].name,
                    image: shuffledArray[0].image
                })
            }, 200)
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
        console.log("Breed got rendered")
        return (

            <div className="breed-name-game">

                <img
                    src={this.state.image}
                    alt={this.state.name}
                />
                {this.shuffle(this.props.breeds).map(breed => {
                    return (
                        <div key={breed.name}>
                            <button onClick={this.submitAwnser} value={breed.name}>{breed.name}</button>
                        </div>
                    )
                })}

            </div>
        )
    }
}


