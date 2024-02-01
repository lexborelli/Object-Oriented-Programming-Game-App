/**Created the game class constructor for the missed, phrases and active phrases. missed is used to track of the number of missed guesses by tthe player. The initial value is 0 for the start of the game. 
 * Phrases holds an array of 5 phrases to use in the game that the player will guess. Active phrases is an object that is set to null. 
 * 
 */

class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = [
            new Phrase('Easier said than done'),
            new Phrase('Lose your marbles'),
            new Phrase('Give it a shot'),
            new Phrase('Never in a million years'),
            new Phrase('keep your chin up')
        ];
        this.activePhrase = null;

    }
    /** The start game method hides the start scrren overlay. It calls the getRandomPhrase method and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property.
     **/

    startGame() {
        const startScreen = document.querySelector('#overlay'); 
        startScreen.style.display = 'none'; 

        this.activePhrase = this.getRandomPhrase(); 
        this.activePhrase.addPhraseToDisplay();
    };


    /* Selects random phrase from phrases property
    @return {Object} Phrase object chosen to be used*/
   
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
        return randomPhrase; 
    };

    

    /**
    * Handles onscreen keyboard button clicks. controls logic of the game. key is event.target which is disabled when a selected letter on the onscreen keyboard is clicked.If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
    If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    * @param (HTMLButtonElement) button - The clicked button element. 
    */

    handleInteraction(key) {
        key.disabled = true;

        const keySelected = key.textContent;

        //const isLetterThere = this.activePhrase.checkLetter(key);
          
         if (this.activePhrase.checkLetter(keySelected)) {
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(keySelected); 
    
        } if (this.checkForWin()) {
            this.gameOver();

        } else if (!this.activePhrase.checkLetter(keySelected)) {
            key.classList.add('wrong');
            this.removeLife();

        }

    }
        
    /**
    * Checks for winning move.  this method checks to see if the player has revealed all of the letters in the active phrase. 
    If there are no more letters with the class hide, meaning all the letters in the display have been guessed and converted from the class hide to show. Then the overlay will display the player has won and the boolean will return true. else it will return false. Then the next step for the handleInteraction will be called. 
    * @return {boolean} True if game has been won, false if game wasn't
    won */
    
    checkForWin() {
    const letterInHiding = document.querySelectorAll('.letter.hide'); 

    if (letterInHiding.length === 0) {
        overlay.classList.add('win'); 
        titleMessage.textContent = "Yay, You've Won!";
        overlay.style.display = 'flex';
        return true;
    } else {
        return false;
     }
    }

    /** Increases the value of the missed property. Removes a life from the scoreboard. Checks if player has remaining lives and ends game if player is out.
    * This method calls the tries class whcih contains the images of the scoreboard which is the heart display. I created a for loop of the hearts if the hearts equal the liveHeart.png image. 
    This for loop listens for the remove life which means the user has guessed a wrong letter that is not in the displayed. Once the user makes a wrong guess the the missed property is upated to each wrong guess, so it goes up by one. 
    *Then the heart source is changed from the liveHeart.png and retrieves the LostHeart.png in the images folder.   
    If the user makes more than 4 wrong guesses the gameOver Method is triggered.*/

    removeLife() {

        const hearts = document.querySelectorAll('.tries img'); 
        
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].getAttribute('src') === 'images/liveHeart.png') {
                this.missed ++;
                hearts[i].src = "images/lostHeart.png";
                break;
             }
            }

        if (this.missed > 4) {
            this.gameOver();
        }
    }

    /**Displays game over message. @param {boolean} gameWon - Whether or not the user won the game
    * gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
      This method checks if the checkForWin method returns true which means all the letters in the phrase have been displayed. If so, the win class is displayed. if not then the the else if is triggered which checks if the player has more than 4 missed letter guesses, which will trigger the lose class.*/

    gameOver() {

        if (this.checkForWin()) {
            overlay.classList.add('win'); 
            titleMessage.textContent = "Yay, You've Won!";
            overlay.style.display = 'flex';

        } else if (this.missed > 4) {
            overlay.classList.add('lose'); 
            titleMessage.textContent = "Oh no, You've Lost! Better Luck, next time!";
            overlay.style.display = 'flex';
           
        }

    }

    /**After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
    To reset the game, complete the following steps: * Remove all li elements from the Phrase ul element. 
    * Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes. * Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
      The overlay will remove the win or lose class and add the start class. The phrase id will be reset and a random phrase will be selected and added to the display. The button on the onscreen keyboard will be reset from wrong or chosen guesses and the keyboard will be cleared.  
      Then the heart source is changed from the LostHeart.png and retrieves the liveHeart.png in the images folder. Resetting the scoreboard of guesses back to 5. 
     */

    resetGame() {
    overlay.classList.remove('win'); 
    overlay.classList.remove('lose'); 
    overlay.classList.add('start');

        letterStorage.innerHTML = "";
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
        for (let i = 0; i < keys.length; i++) {
            keys[i].removeAttribute('disabled');
            keys[i].classList.remove("chosen", "wrong"); 

        }

        const hearts = document.querySelectorAll('.tries img'); 
        
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].getAttribute('src') === "images/lostHeart.png") {
                hearts[i].src = 'images/liveHeart.png';
             }
            }
    }

}