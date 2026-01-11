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
        <section 
            className={"buttons"}
            aria-label={"Keyboard"}
        >
            {letters.map(letter => {
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