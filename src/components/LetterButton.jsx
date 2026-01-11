export default function LetterButton({letter, onClick, isGuessed, isCorrect, isGameOver}) {
    // all this component does is render a button
    // if the button is clicked it calls the onClick function
    // which adds the letter to the guessedLetters array
    // if the letter guessed is correct the button background color changes to green
    // if the letter guessed is incorrect the button background color changes to red
    // if the letter is already guessed or the game is over the button is disabled
    // if the letter is not guessed the button background color has the default color
    const styles = {
        backgroundColor: isGuessed ? (isCorrect ? "#0ea051" : "#ea5342") : undefined,
        opacity: isGameOver ? 0.5 : undefined,
        cursor: isGameOver ? "not-allowed" : "pointer"
    }

    /* aria-label provides context for screen readers about the letter's state */
    const ariaLabel = isGuessed 
        ? `${letter} - ${isCorrect ? "correct" : "incorrect"}` 
        : `Guess letter ${letter}`

    return (
        <button 
            className={"letter-btn"} 
            onClick={onClick}
            disabled={isGuessed || isGameOver}
            style={styles}
            aria-label={ariaLabel}
        >
            {letter}
        </button>
    )
}