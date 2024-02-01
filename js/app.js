const btnReset = document.querySelector('#btn__reset');
const qwerty = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key'); 
const letterStorage = document.querySelector('#phrase ul'); 
const letter = document.querySelectorAll('.letter');
const titleMessage = document.querySelector('.title');


/**Created an eventListener for when the start game button is clicked. It wwill call the Game method in game.js and start a new game of the phrase hunter and when the game is done, the start game button could be pressed again to reset the game. */

let game;

btnReset.addEventListener('click', () => {
    game = new Game; 
    game.startGame();
    game.resetGame();
});

/**Created an event listener for the qwerty id to liste when a button on the on screen keyboard button with the class Key is clicked. 
 * Added a for loop for the key class which is assigned to buttons. The for loop listens for the button to be clicked once a button is clicked the game.handleInteraction method is called.  
  */

qwerty.addEventListener('click', (event) => {

    for (let i = 0; i < keys.length; i++) {
    if (event.target.className === 'key') {
        const key = event.target; 
        game.handleInteraction(key);
        }
    }
});

/**added an event listener to the document to listen when a users physical keyboard is pressed and the keyboard key is released. I used the forEach method to call a function for the key class which are the buttons on the onscreen keyboard. The forEach method  calls a function for each key in the keys class. 
 * If the key is pressed on the physical keyboard is released which will trigger the html association with the button letter and the key is not disabled, then the key will trigger the handleInteraction method and pass the key selected to through the method.
 */

document.addEventListener('keyup', (event) => {
    
   keys.forEach(key => {
    if (key.textContent === event.key && !key.disabled) {
        game.handleInteraction(key);
    } 
   })

});

