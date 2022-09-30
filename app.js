let userScore = 0;
let computerScore = 0;
const scoreToWin = 1;

const main = document.querySelector('main');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

const result_div = document.querySelector('.result p');
const reset_btn = document.getElementById('reset');

function addEventListeners() {
  rock_div.addEventListener('click', rock);
  paper_div.addEventListener('click', paper);
  scissors_div.addEventListener('click', scissors);
}

function removeEventListeners() {
  rock_div.removeEventListener('click', rock);
  paper_div.removeEventListener('click', paper);
  scissors_div.removeEventListener('click', scissors);
}

function rock() {
  const computerChoice = Math.ceil(Math.random() * 3);
  if (computerChoice === 1) {
    result_div.innerText = "It's a tie.";
  }
  if (computerChoice === 2) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerText = 'Paper covers Rock. You loose.';
  }
  if (computerChoice === 3) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerText = 'Rock crushes Scissors. You win!';
  }
  endOfGame();
}

function paper() {
  const computerChoice = Math.ceil(Math.random() * 3);
  if (computerChoice === 1) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerText = 'Paper covers Rock. You win!';
  }
  if (computerChoice === 2) {
    result_div.innerText = "It's a tie.";
  }
  if (computerChoice === 3) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerText = 'Scissors cut Paper. You loose.';
  }
  endOfGame();
}

function scissors() {
  //todo START: 
  // scissors_div.style.backgroundColor = 'green';
  //todo END 
  const computerChoice = Math.ceil(Math.random() * 3);
  if (computerChoice === 1) {
    computerScore++;

    computerScore_span.innerHTML = computerScore;
    result_div.innerText = 'Rock crushes Scissors. You loose.';
  }
  if (computerChoice === 2) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerText = 'Scissors cut Paper. You win!';
  }
  if (computerChoice === 3) {
    result_div.innerText = "It's a tie.";
  }
  endOfGame();
}

function endOfGame() {
  const summary = document.getElementById('summary');
  const summaryMessage_p = document.getElementById('summary-message');

  if (userScore === scoreToWin) {
    removeEventListeners();
    summary.classList.remove('hidden');
    summaryMessage_p.innerHTML = `All right, you won! &#128516<br>${userScore} : ${computerScore}`;
    // main.style.backgroundColor='#444444ee'
  
  }
  if (computerScore === scoreToWin) {
    removeEventListeners();
    summary.classList.remove('hidden');
    summaryMessage_p.innerHTML = `You lost, hmpf. &#128548<br>${userScore} : ${computerScore}`;
    // main.style.backgroundColor='#444e'
  
  }
}

addEventListeners();
result_div.innerText = `Reach ${scoreToWin} points to win.`;

reset_btn.onclick = () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
  result_div.innerText = `Reach ${scoreToWin} points to win.`;
  summary.classList.add('hidden');
  addEventListeners();
};
