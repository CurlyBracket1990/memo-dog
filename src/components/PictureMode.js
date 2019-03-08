import * as React from 'react'
import HintContainer from './HintContainer'

export default class PictureMode extends React.Component {

    state = { opacity: 1, incorrectAnswer: [] }

    componentDidUpdate(prevProps){
        if(this.props.correctAnswer.image !== prevProps.correctAnswer.image){
           this.setState({
                opacity: 1
            })
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
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

    handleKeyDown = (e) => {
        if (this.props.level === 1) {
            for (let i = 1; i < 4; i++) {
                if (e.key === i.toString()) {
                    this.props.submitAnswerWithKey(this[`ref${i}`])
                }
            }
        }
        if (this.props.level === 2) {
            for (let i = 1; i < 7; i++) {
                if (e.key === i.toString()) {
                    this.props.submitAnswerWithKey(this[`ref${i}`])
                }
            }
        }
        if (this.props.level === 3) {
            for (let i = 1; i < 10; i++) {
                if (e.key === i.toString()) {
                    this.props.submitAnswerWithKey(this[`ref${i}`])
                }
            }
        }
    }

    render() {
        return (
            <div>
                <span className='title'>{this.props.correctAnswer.name}</span>
                {this.props.breeds
                    .map((breed, index) =>
                        breed.name === this.state.incorrectAnswer.name ?
                            <img className='answer' ref={(ref) => this[`ref${index + 1}`] = ref}
                                style={{ opacity: this.state.opacity }}
                                onClick={this.props.submitAnswer} key={index + 1} alt={breed.name} src={breed.image} />
                            :
                            <img className='answer' onKeyPress={this.handleKeyPress} ref={(ref) => this[`ref${index + 1}`] = ref}
                                onClick={this.props.submitAnswer} key={index + 1} alt={breed.name} src={breed.image}
                            />)}
                <HintContainer hintHighlight={this.hintHighlight} />
            </div>
        )
    }
}

