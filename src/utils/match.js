function checkGuess(word, guess){
    return word.toUpperCase().includes(guess.toUpperCase());
}

export { checkGuess}