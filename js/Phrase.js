

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    /*Display phrase on game board*/

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

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check*/

    checkLetter(key) {
        return this.phrase.includes(key); 
     } 
     /**
* Displays passed letter on screen after a match is found
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
