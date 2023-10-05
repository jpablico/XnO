const gameXnO = (function() {
	"use strict";

	const GameBoard = (() => {
		const board = ["", "", "", "", "", "", "", "", ""];

		                                                             
	})();

	const Player = (name, mark) => {

	};

	function renderGameBoard() {

	}

	function handlePlayerMove(cellIndex) {

	}

	function checkGameOver() {
		const gameWinningConditions = [
			[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
		];
	}

	function setupGame() {

	}


})();
/*
	function gameBoardSetup() {
		const gameBoard = ["", "", "", "", "", "", "", "", ""];

		function gameBoardInitialization() {
			var createDiv = document.createElement('div');
			createDiv.className = 'gameTile bg-blue-400 border-solid w-40 h-40 flex flex-1 box-border';
			createDiv.innerHTML = 'Tile';

			createDiv.addEventListener("click", function() {
				console.log("BOP")
			})
			document.getElementById('main').appendChild(createDiv);

			}
		gameBoard.forEach(gameBoardInitialization);
	}

	return {
		publicMethod: function() {
			gameBoardSetup();
		}
	};
})();


gameXnO.publicMethod();
*/