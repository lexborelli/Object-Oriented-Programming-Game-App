class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    /*Display phrase on game board*/

    addPhraseToDisplay () {
        const phraseStorage = document.querySelector('#phrase ul'); 
        const letters = this.phrase.split(''); 
        let html = '';

        letters.forEach(letter => {
            if (letter === '') {
                html += '<li class="space"> </li>'
            } else {
                html += `<li class="hide letter ${letter}">${letter}</li>`
            }
        })
        phraseStorage.innerHTML = html; 
      
}
}