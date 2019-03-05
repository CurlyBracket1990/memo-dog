import * as React from 'react'
import PictureMode from './PictureMode';

const breeds = [{name: "dummy1", image: "/"},{name: "dummy2", image: "/"},{name: "dummy3", image: "/"}]

export default class PictureModeContainer extends React.Component {
    render () {
        return (
            <div>
                <PictureMode nextQuestion={this.props.nextQuestion} breeds={breeds}/>
            </div>

        )   
    }
}

