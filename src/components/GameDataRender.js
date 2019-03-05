import * as React from 'react'
import PictureModeContainer from './PictureModeContainer';
import BreedModeContainer from './BreedModeContainer';

export default class GameDataRender extends React.Component {

    nextQuestion = (value) => {
        console.log(value)
    }

    randomize() {
        return Math.random()
    }

    render() {
        const randomNum = this.randomize()
        return (
            <div >
                {this.props.breeds === [] && 'Loading...'}
        {randomNum < 0.5 && this.props.breeds.length > 0 && <BreedModeContainer breeds={this.props.breeds} nextQuestion={this.nextQuestion} />}
        {randomNum > 0.5 && this.props.breeds.length > 0 && <PictureModeContainer breeds={this.props.breeds} nextQuestion={this.nextQuestion} />}
        </div>
        )

    }
}
