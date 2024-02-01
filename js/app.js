const btnReset = document.querySelector('#btn__reset');
const qwerty = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key'); 
const letterStorage = document.querySelector('#phrase ul'); 
const letter = document.querySelectorAll('.letter');
const titleMessage = document.querySelector('.title');


const game = new Game();
btnReset.addEventListener('click', () => {
    game.startGame();
});


qwerty.addEventListener('click', (event) => {

    for (let i = 0; i < keys.length; i++) {
    if (event.target.className === 'key') {
        const key = event.target; 
        game.handleInteraction(key);
        

    }
    }
});

qwerty.addEventListener('keyup', (event) => {
    
    for (let i = 0; i < keys.length; i++) {
        if (event.target === keys[i].textContent) {
            game.handleInteraction(keys);
        }
    }

});

