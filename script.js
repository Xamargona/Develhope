let humanPlayer = 'X';
let computerPlayer = 'O';

let humanPlayerTurn = true;
let gameOver = false;
let winner = '';

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playMove(cellButton) {
    if (humanPlayerTurn && cellButton.innerHTML === '' && !gameOver) {
        cellButton.innerHTML = humanPlayer;
        humanPlayerTurn = false;
        checkWinner();
        setTimeout(computerTurn, 500);
    }
}

function computerTurn() {
    if (!humanPlayerTurn && !gameOver) {
        let emptyCells = document.querySelectorAll('.btn-square:empty');
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.innerHTML = computerPlayer;
        checkWinner();
        humanPlayerTurn = true;
    }
}

function checkWinner() {
    let cells = document.querySelectorAll('.btn-square');
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        if (cells[combo[0]].innerHTML !== '' &&
            cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
            cells[combo[1]].innerHTML === cells[combo[2]].innerHTML) {
            gameOver = true;
            if (cells[combo[0]].innerHTML === humanPlayer) {
                gameOver = true;
                winner = 'Human';

                cells[combo[0]].style.backgroundColor = 'lightgreen';
                cells[combo[1]].style.backgroundColor = 'lightgreen';
                cells[combo[2]].style.backgroundColor = 'lightgreen';
            } else {
                gameOver = true;
                winner = 'Computer';

                cells[combo[0]].style.backgroundColor = 'red';
                cells[combo[1]].style.backgroundColor = 'red';
                cells[combo[2]].style.backgroundColor = 'red';
            }
            setTimeout(announceWinner, 500);
        }
    }
    if (!Array.from(cells).some(cell => cell.innerHTML === '')) {
        gameOver = true;
        winner = 'Tie';
        cells.forEach(cell => cell.style.backgroundColor = 'lightblue');
        setTimeout(announceWinner, 500);
    }
} 

function announceWinner() {
    if (winner = 'Tie') {
        alert('EMPATE!');
    } else if(winner = 'Human') {
        alert('Ganaste!');
    } else {
        alert('Perdiste!');
    }
}

function restart() {
    let cells = document.querySelectorAll('.btn-square');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style.backgroundColor = 'antiquewhite';
    }
    humanPlayerTurn = true;
    gameOver = false;
    winner = '';
}