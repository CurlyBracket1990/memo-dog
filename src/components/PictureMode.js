import * as React from 'react'

export default class PictureMode extends React.Component {

    state = { name: this.props.breeds[0].name, image: this.props.breeds[0].image }

    submitAwnser = (e) => {
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
            <div>
                <span>What breed is this?</span>
                <img alt={this.state.name} src={this.state.image} /> {this.state.name}
                {this.shuffle(this.props.breeds).map((breed, index) => {
                    return <button key={index} onClick={this.submitAwnser} value={breed.name}>{breed.name}</button>
                })}
            </div>

        )
    }
}

