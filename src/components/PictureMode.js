import * as React from 'react'
import HintContainer from './HintContainer'

export default class PictureMode extends React.Component {

    state = { mode: "pictureMode", opacity: 1, incorrectAnswer: [] }

    componentDidUpdate(prevProps){
        if(this.props.correctAnswer.image !== prevProps.correctAnswer.image){
            this.setState({
                opacity: 1
            })
        }
    }

    hintHighlight = () => {
        const incorrect = this.props.breeds.filter((breed) =>
            breed.name !== this.props.correctAnswer.name
        )
        this.setState({
            opacity: 0.3,
            incorrectAnswer: incorrect[Math.floor(Math.random() * incorrect.length)]
        })
    }

    render() {
        return (
            <div>
                <span className='title'>{this.props.correctAnswer.name}</span>
                {this.props.breeds
                    .map((breed, index) =>
                        breed.name === this.state.incorrectAnswer.name ?
                        <img className='answer' style={{ opacity: this.state.opacity }} 
                        onClick={this.props.submitAnswer} key={index + 1} alt={breed.name} src={breed.image} />
                        :
                        <img className='answer' onClick={this.props.submitAnswer} key={index + 1} alt={breed.name} src={breed.image}
                        />)}
                <HintContainer hintHighlight={this.hintHighlight}/>
            </div>
        )
    }
}

