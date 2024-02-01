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
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
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
* Checks for winning move
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

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

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

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

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

}