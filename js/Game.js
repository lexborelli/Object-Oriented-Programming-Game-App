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

    /*handleInteraction() {

    }*/


}


