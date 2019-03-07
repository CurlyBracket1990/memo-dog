import * as React from 'react'
import PictureModeContainer from './PictureModeContainer';
import BreedModeContainer from './BreedModeContainer';

export default class GameDataRender extends React.Component {

    render() {
        const randomNum = Math.random()
        return (
            <div >
                {randomNum <= 0.5 &&
                    <BreedModeContainer />}
                {randomNum > 0.5 &&
                    <PictureModeContainer />}
            </div>
        )

    }
}
