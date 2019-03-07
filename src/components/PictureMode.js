import * as React from 'react'

export default class PictureMode extends React.Component {

    render() {
        console.log("Picturemode rendered")
        return (
            <div>
                <span className='title'>{this.props.correctAnswer.name}</span>
                {this.props.breeds
                    .map((breed, index) => 
                    <img onClick={this.props.submitAnswer} key={index} alt={breed.name} src={breed.image} 
                    />)}
            </div>

        )
    }
}

