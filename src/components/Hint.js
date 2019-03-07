import * as React from 'react'

export default class Hint extends React.Component {
    
    render () {
        return (
            <div className="hint-button">
                <button type="button" 
                        onClick={this.handleHintRequest}>
                    Hint
                </button>
            </div>
            
        )
    }
}