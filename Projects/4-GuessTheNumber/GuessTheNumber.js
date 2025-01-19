const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainig = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const MAX_GUESSES = 10;
const MAX_NUMBER = 100;

let randomNumber = parseInt(Math.random() * MAX_NUMBER + 1);
const p = document.createElement('p');
let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > MAX_NUMBER) {
        alert('Please enter a valid number between 1 and 100');
    } else {
        if (prevGuess.includes(guess)) {
            displayMessage('You already guessed that number');
        } else {
            prevGuess.push(guess);
            displayGuess(guess);
            if (numGuesses === MAX_GUESSES + 1) {
                displayMessage(`Game Over, Random number was ${randomNumber}`);
                endGame();
            } else {
                checkGuess(guess);
            }
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed it right');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Too low!');
    } else {
        displayMessage('Too high!');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remainig.innerHTML = `Remaining Guesses: ${MAX_GUESSES - numGuesses + 1}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * MAX_NUMBER + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remainig.innerHTML = `Remaining Guesses: ${MAX_GUESSES}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
a