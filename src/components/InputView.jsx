import CharBox from "./CharBox.jsx"
export default function InputView({word, guessedLetters, isGameLost}) {
    return (
        <section 
            className={"letters"}
            aria-label={"Current word"}
            aria-live="polite"
            aria-atomic="true"
        >
            {word.split("").map((char, index) => {
                // the guessedLetters is initially empty
                // so the isGuessed check will always return false
                // since the letter is not in the guessedLetters array
                // once a letter is guessed it is added to the guessedLetters array
                // the letter is then displayed in the correct position if it is in the guessedLetters array
                const isGuessed = guessedLetters.includes(char.toUpperCase())
                return <CharBox isGameLost={isGameLost} key={index} isGuessed={isGuessed} char={char} />
            })}
        </section>
    )
}