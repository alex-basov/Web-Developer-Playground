//
// Blackjack game
//

console.clear();

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  'Ten',
  'Nine',
  'Eight',
  'Seven',
  'Six',
  'Five',
  'Four',
  'Three',
  'Two'
];

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function getNextCard() {
  return deck.shift(); // the card is removed from the deck
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.group('The game');
console.log('This is the Blackjack!');

console.log('You are dealt: ');
console.log('   ' + getCardString(playerCards[0]));
console.log('   ' + getCardString(playerCards[1]));
console.groupEnd();
