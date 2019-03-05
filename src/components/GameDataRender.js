import * as React from 'react'
import PictureModeContainer from './PictureModeContainer';
import BreedModeContainer from './BreedModeContainer';
import store from '../store'
import { gameData } from '../actions/gameData'


export default class GameDataRender extends React.Component {

    nextQuestion = (value, breed) =>{
                store.dispatch(gameData(3, value, breed))
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
