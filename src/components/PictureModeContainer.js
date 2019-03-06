import * as React from 'react'
import PictureMode from './PictureMode';

export default class PictureModeContainer extends React.Component {
    render () {
        return (
            <div>
                <PictureMode overWriteBreeds={this.props.overWriteBreeds} nextQuestion={this.props.nextQuestion} breeds={this.props.breeds}/>
            </div>

        )   
    }
}

