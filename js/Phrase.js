    /**The Phrase class should include a constructor that receives a phrase parameter and initializes the following properties: phrase: this is the actual phrase the Phrase object is representing. 
     * This property should be set to the phrase parameter, but converted to all lower case.
     */


    class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    /*Display phrase on game board. addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
     Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. 
     When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.*/

    addPhraseToDisplay () {
        let html = '';
        const letters = this.phrase.split(''); 

        letters.forEach(letter => {
            if (letter === ' ') {
                html += '<li class="space"> </li>'
            } else {
                html += `<li class="hide letter ${letter}">${letter}</li>`
            }
        })
        letterStorage.innerHTML = html; 
    }

    /**Checks if passed letter is in phrase. Matches the letter the user selected.@param (string) letter - Letter to check
    */

    checkLetter(key) {
        return this.phrase.includes(key); 
     } 
     /**
    * Displays passed letter on screen after a match is found. showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. 
    * To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
    * Utilized the phrase id to check if the key selected with the phrase that is on display. Once a key is selected that matches the display the letter on display will have its hide class removed and replaced with the show class. 
    * @param (string) letter - Letter to display*/

    showMatchedLetter(key) {
        const selectedLetters = document.querySelectorAll('#phrase ul li');
    
       if (this.checkLetter(key)) {
        for (let i = 0; i < selectedLetters.length; i++) {
            if (selectedLetters[i].classList.contains(key)) {
                selectedLetters[i].classList.remove("hide");
                selectedLetters[i].classList.add("show"); 
            }
        }
       }  
        

    }
}
