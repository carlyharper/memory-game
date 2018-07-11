import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {

    render() {

        var memoryCardInnerClass = 'MemoryCardInner';

        if (this.props.isFlipped == true) {
            memoryCardInnerClass += ' flipped';
        }

        return (
            <div className="MemoryCard" onClick={ this.props.pickCard }>
                <div className={ memoryCardInnerClass }>
                    <div className="MemoryCardBack">
                        <img src="IMG_4905.png" />
                    </div>
                    <div className="MemoryCardFront">
                        {console.log(this.props.symbol)}
                        <img className="BeazImg" src={this.props.symbol} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;