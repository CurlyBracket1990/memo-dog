import * as React from 'react'
import PictureMode from './PictureMode';

export default class PictureModeContainer extends React.Component {
    render () {
        return (
            <div>
                <PictureMode nextQuestion={this.props.nextQuestion} breeds={this.props.breeds}/>
            </div>

        )   
    }
}

