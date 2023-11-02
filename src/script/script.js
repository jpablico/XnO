const gameSetup = (() => {
	'use strict';

	const gameboardContainer = document.getElementsByClassName("gameboard-container")[0];

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
		let gameOver = false;

		const squares = document.querySelectorAll('.square');

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
			if (gameboard[squareIndex] || gameOver) {
				return;
			}
			gameboard[squareIndex] = currentPlayer;
			e.target.textContent = currentPlayer;
			const winner = checkForWinner();
			if (winner) {
				gameOver = true;
				if (winner === 'tie') {
					alert('Tie game!');
				} else {
					alert(`${winner} wins!`);
				}
			} else {
				currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
			}
		}

		squares.forEach(square => square.addEventListener('click', handleClick));

	})();

	return {
		publicMethod: function() {

		}
	};
})();
