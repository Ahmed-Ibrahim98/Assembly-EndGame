import LetterButton from "./LetterButton.jsx"
import {checkGuess} from "../utils/match.js"
export default function InputButtons({letters, word, guessedLetters, setGuessedLetters, isGameOver, setJustDied}) {
    function handleClick(letter) {
        if (!isGameOver && !guessedLetters.includes(letter)) {
            // add the letter to the guessedLetters array
            // if the letter is not already in the array or the game is not over
            // then rerender all the buttons
            setGuessedLetters(prev => [...prev, letter])
        }
        if (checkGuess(word, letter)){
            setJustDied(null)
        }
    }
    return (
        <section className={"buttons"}>
            {letters.map(letter => {
                // the guessedLetters is initially empty
                // so the isGuessed check will always return false
                // since the letter is not in the guessedLetters array
                // and isCorrect will always return false
                // when a button is clicked the letter is added to the guessedLetters array
                // then all buttons are rerendered again
                // by then the isGuessed check will return true for the button that was just clicked
                // and the isCorrect check will return true if the letter is in the word
                const isGuessed = guessedLetters.includes(letter)
                const isCorrect = isGuessed && checkGuess(word, letter)
                return (
                    <LetterButton 
                        onClick={() => handleClick(letter)} 
                        key={letter} 
                        letter={letter} 
                        isGuessed={isGuessed}
                        isCorrect={isCorrect}
                        isGameOver={isGameOver}
                    />
                )
            })}
        </section>
    )
}