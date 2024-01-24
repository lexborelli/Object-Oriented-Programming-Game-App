const game = new Game();
const btnReset = document.querySelector('#btn__reset');

btnReset.addEventListener('click', () => {
    game.startGame();
});