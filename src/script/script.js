document.addEventListener('DOMContentLoaded', function () {
	const gameSetup = (() => {
	  'use strict';
  
	  const gameboardContainer = document.querySelector(".gameboard-container");
	  

	  const GameBoard = (() => {
		const gameboard = Array(9).fill(null);
		const winningCombinations = [
		  [0, 1, 2],
		  [3, 4, 5],
		  [6, 7, 8],
		  [0, 3, 6],
		  [1, 4, 7],
		  [2, 5, 8],
		  [0, 4, 8],
		  [2, 4, 6]
		];
		let currentPlayer = 'X';
		playerTurn();
		let gameOver = false;
  
		function createSquares() {
		  for (let i = 0; i < 9; i++) {
			const square = document.createElement('div');
			square.classList.add('square');
			square.dataset.index = i;
			gameboardContainer.appendChild(square);
		  }
		}
  
		function checkForWinner() {
		  for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
			  return gameboard[a];
			}
		  }
		  if (gameboard.every(square => square !== null)) {
			return 'tie';
		  }
		  return null;
		}
  
		
		function handleClick(e) {
		  const squareIndex = parseInt(e.target.dataset.index);
		  const gameAlertContainer = document.querySelector('.game-alert-container');
		  const gameAlert = document.querySelector('#game-alert-text');
		  if (gameboard[squareIndex] || gameOver) {
			return;
		  }
		  gameboard[squareIndex] = currentPlayer;
		   console.log(currentPlayer)
		  e.target.innerHTML = currentPlayer === 'X' ? '<i class="material-icons icons x-icon">close</i>' : '<i class="material-icons icons o-icon">radio_button_unchecked</i>';
		  console.log(currentPlayer);
		  gameAlert.innerHTML = currentPlayer === 'X' ? '<i class="material-icons icons o-icon">radio_button_unchecked</i>Turn' : '<i class="material-icons icons x-icon">close</i>Turn';
		   console.log(currentPlayer);
		  const winner = checkForWinner();
		  if (winner) {
			gameOver = true;
			if (winner === 'tie') {
			  alert('Tie game!');
			} else {
			  let winnerName = winner === 'X' ? 'Player 1' : 'Player 2';
			  alert(`${winnerName} wins!`);
			}
		  } else {
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		  }
		  playerTurn();
		  console.log(currentPlayer);
		}
		
		
		function playerTurn() {
			const gameAlertContainer = document.querySelector('.game-alert-container');
		  if (currentPlayer === 'X') {
			gameAlertContainer.classList.add('player1');
			gameAlertContainer.classList.remove('player2');
		  } else if (currentPlayer === 'O') {
			gameAlertContainer.classList.add('player2');
			gameAlertContainer.classList.remove('player1');
		  } else {
			console.log('Error: playerTurn()');
		  }
		}

		function resetGame() {
		  gameboard.fill(null);
		  currentPlayer = 'X';
		  gameOver = false;
		  const squares = document.querySelectorAll('.square');
		  squares.forEach(square => square.innerHTML = '');
		  console.log('Game reset');
		}
  
		createSquares();
		const squares = document.querySelectorAll('.square');
		squares.forEach(square => square.addEventListener('click', handleClick));
  
		return {
		  resetGame: resetGame
		};
	  })();
  
	  const resetButton = document.getElementById('reset-button');
	  resetButton.addEventListener('click', GameBoard.resetGame);
	});
	gameSetup();
	console.log('script loaded');
  });
  