'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const button = document.querySelector('.check');
button.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number has been input';
  } else if (guess === randomNumber) {
    console.log(guess);
    document.querySelector('.message').textContent = 'Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const reset = document.querySelector('.again');
reset.addEventListener('click', () => {
  score = 20;
  randomNumber = randomNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
