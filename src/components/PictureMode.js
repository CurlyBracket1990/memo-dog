import * as React from 'react'

export default class PictureMode extends React.Component {

    state = { name: this.props.breeds[0].name, image: this.props.breeds[0].image }

    submitAwnser = (e) => {
        if (e.target.alt === this.state.name) {
            setTimeout(() => {
                this.props.nextQuestion("Correct", this.state.name)
            }, 100)
        } else {
            setTimeout(() => {
                this.props.nextQuestion("Wrong", this.state.name)
            }, 100)
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
            <div>
                <span>What breed is this?</span>
                <span>{this.state.name}</span>
                {this.shuffle(this.props.breeds).map((breed, index) => {
                    return <img onClick={this.submitAwnser} key={index} alt={breed.name} src={breed.image} />
                })}
            </div>

        )
    }
}

