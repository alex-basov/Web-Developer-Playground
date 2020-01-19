//
// Blackjack game
//

console.clear();

// Card constants
const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const values = [
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

// DOM constants
const textArea = document.querySelector('#text-area');
const newGameBtn = document.querySelector('#new-game-btn');
const hitBtn = document.querySelector('#hit-btn');
const stayBtn = document.querySelector('#stay-btn');

// Game variables
let gameStarted = false;
let gaveOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let deck = [];

hideElement(hitBtn, stayBtn);
showStatus();

function hideElement(...elements) {
  elements.forEach(element => (element.style.display = 'none'));
}

function showElement(...elements) {
  elements.forEach(element => (element.style.display = 'unset'));
}

newGameBtn.addEventListener('click', () => {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  hideElement(newGameBtn);
  showElement(hitBtn, stayBtn);
  showStatus();
});

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

// Shuffling cards
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    // temporary card with random index the value of which
    // will be assigned to the card with the current index
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }

  for (let i = 0; i < deck.length; i++) {
    textArea.innerText += '\n' + i + ': ' + getCardString(deck[i]);
  }
}

function getNextCard() {
  return deck.shift(); // the card is removed from the deck
}
