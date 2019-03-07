import * as React from 'react'
import HintContainer from './HintContainer'

export default class PictureMode extends React.Component {

    state = { mode: "pictureMode", opacity: 1, incorrectAnswer: [] }

    componentDidMount() {
        this.setIncorrect()
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps) {
        if (this.props.correctAnswer.image !== prevProps.correctAnswer.image) {
            this.setIncorrect()
            this.setState({
                opacity: 1
            })
        }
    }

    setIncorrect = () => {
        const incorrect = this.props.breeds.filter((breed) =>
            breed.name !== this.props.correctAnswer.name
        )
        this.setState({
            incorrectAnswer: incorrect[Math.floor(Math.random() * incorrect.length)]
        })
    }

    hintHighlight = () => {
        this.setState({
            opacity: 0.3
        })
    }

    handleKeyDown = (e) => {
        if (e.key === "1") {
            this.props.submitAnswerWithKey(this.ref1)
        }
        if (e.key === "2") {
            this.props.submitAnswerWithKey(this.ref2)
        }
        if (e.key === "3") {
            this.props.submitAnswerWithKey(this.ref3)
        }
        return null
    }

    render() {
        return (
            <div>
                <span className='title'>{this.props.correctAnswer.name}</span>
                {this.props.breeds
                    .map((breed, index) =>
                        breed.name === this.state.incorrectAnswer.name ?
                            <img ref={(ref) => this[`ref${index + 1}`] = ref}
                                style={{ opacity: this.state.opacity }}
                                onClick={this.props.submitAnswer} key={index + 1} alt={breed.name} src={breed.image} />
                            :
                            <img onKeyPress={this.handleKeyPress} ref={(ref) => this[`ref${index + 1}`] = ref}
                                onClick={this.props.submitAnswer} key={index + 1} alt={breed.name} src={breed.image}
                            />)}
                <HintContainer hintHighlight={this.hintHighlight} />
            </div>
        )
    }
}

