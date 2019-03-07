componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = (e) => {
     if(e.key === "1") {
        this.submitAwnserWithKey(this.refs[1])
     }
     if(e.key === "2") {
        this.submitAwnserWithKey(this.refs[2])
     }
     if(e.key === "3") {
        this.submitAwnserWithKey(this.refs[3])
     }
     return null
}

submitAwnserWithKey = (e) => {
    if (e.value === this.state.name) {
        setTimeout(() => {
            this.props.overWriteBreeds(this.props.level*3)
            this.props.nextQuestion("Correct", this.state.name)
        }, 200)
    } else {
        setTimeout(() => {
            this.props.overWriteBreeds(this.props.level*3)
            this.props.nextQuestion("Wrong", this.state.name)
        }, 200)
    }
    return null
}