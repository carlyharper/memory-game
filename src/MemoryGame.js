import React, { Component } from 'react';
import './MemoryGame.css';
import MemoryCard from './MemoryCard.js';

let generateDeck = () => {
  let BeazImgs = ['IMG_1318.png', 'IMG_4184.png', 'IMG_4934.png', 'IMG_5232.png', 'IMG_5357.png', 'IMG_6165.png', 'IMG_5968.png', 'IMG_5730.png'];
  let deck = [];

  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: BeazImgs[i%8]
    });
  }
  shuffle(deck);
  return deck;
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class MemoryGame extends Component {

  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  };

  pickCard(cardIndex) {
    if(this.state.deck[cardIndex].isFlipped ){
      return;
    };
    let cardToFlip = {
      ...this.state.deck[cardIndex]
    };
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if(cardIndex === index) {
        return cardToFlip;
      };
      return card;
    })

    if(newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
        if(newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
          //this.unflipCards(card1Index, card2Index)
          setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
        }
      newPickedCards = [];
    }

    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  };

  unflipCards(card1Index, card2Index) {
    let card1 = {...this.state.deck[card1Index]};
    let card2 = {...this.state.deck[card2Index]};
    card1.isFlipped = false;
    card2.isFlipped = false;

    let newDeck = this.state.deck.map((card, index) => {
      if(index === card1Index) {
        return card1;
      } if (index === card2Index) {
        return card2;
      }
        return card;
    });
    this.setState({
      deck: newDeck
    });
  }

  render() {

    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BEAZLEY GAME</h1>
          <h2 className="App-subtitle">Match pics of The Beaz to win</h2>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default MemoryGame;
