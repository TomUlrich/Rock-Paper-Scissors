let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');

const result_div = document.querySelector('.result p');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');



function rock() {
    let compChoice = Math.ceil(Math.random() * 3);
    if (compChoice === 1) {
        result_div.innerText = 'It\'s a tie.';
    }
    if (compChoice === 2) {
        computerScore += 1;
        computerScore_span.innerHTML = computerScore;
        result_div.innerText = 'Paper covers Rock. You loose!';

    }
    if (compChoice === 3) {
        userScore += 1;
        userScore_span.innerHTML = userScore;
        result_div.innerText = 'Rock crushes Scissors. You win!';
    }

    console.log(compChoice);
}

function paper() {
    let compChoice = Math.ceil(Math.random() * 3);
    if (compChoice === 1) {
        userScore += 1;
        userScore_span.innerHTML = userScore;
        result_div.innerText = 'Paper covers Rock. You win!';
    }
    if (compChoice === 2) {
        result_div.innerText = 'It\'s a tie.';


    }
    if (compChoice === 3) {
        computerScore += 1;
        computerScore_span.innerHTML = computerScore;
        result_div.innerText = 'Scissors cut Paper. You loose!';
    }
    console.log(compChoice);
}

function scissors() {
    let compChoice = Math.ceil(Math.random() * 3);
    if (compChoice === 1) {
        computerScore += 1;
        computerScore_span.innerHTML = computerScore;
        result_div.innerText = 'Rock crushes Scissors. You loose!';
    }
    if (compChoice === 2) {
        userScore += 1;
        userScore_span.innerHTML = userScore;
        result_div.innerText = 'Scissors cut Paper. You win!';
    }
    if (compChoice === 3) {
        result_div.innerText = 'It\'s a tie.';
    }
    console.log(compChoice);
}

rock_div.addEventListener('click', rock);
paper_div.addEventListener('click', paper);
scissors_div.addEventListener('click', scissors);