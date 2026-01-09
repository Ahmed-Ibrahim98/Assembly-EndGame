import './App.css'
import allLanguages from "./data/languages.js";
import randomWord from "./data/guessWords.js";
import letters from "./data/letters.js";
import Header from './components/Header.jsx'
import ResultBox from './components/ResultBox.jsx'
import LanguagesBox from './components/LanguagesBox.jsx'
import InputView from './components/InputView.jsx'
import InputButtons from './components/InputButtons.jsx'
import NewGameButton from './components/NewGameButton.jsx'
import {useEffect, useState} from "react";
import {checkGuess} from "./utils/match.js";

export default function App() {
    const [word, setWord] = useState(randomWord());
    const [languages, setLanguages] = useState(allLanguages);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [justDied, setJustDied] = useState(null)
    // get the number of wrong guesses
    const wrongGuessesCount =
        guessedLetters.filter(letter => !checkGuess(word, letter)).length
    // if every letter in the word is in the guessedLetters array then the game is won
    const isGameWon = word.split("").every(letter => guessedLetters.includes(letter.toUpperCase()))
    // if the wrong guesses count is equal to the number of languages minus 1 then the game is lost
    const isGameLost = wrongGuessesCount >= allLanguages.length - 1
    // if the game is won or lost then the game is over
    const isGameOver = isGameWon || isGameLost

    useEffect(() => {
        setLanguages(prevLanguages => prevLanguages.map((lang, index) => ({
            ...lang,
            // initially all languages are alive
            // when the index of the language is less than the number of wrong guesses
            // the language is marked as dead
            // otherwise it is marked as alive
            alive: index >= wrongGuessesCount
        })))
        if (wrongGuessesCount > 0){
            setJustDied(languages[wrongGuessesCount - 1])
        }
    }, [wrongGuessesCount])
    function resetGame() {
        setWord(randomWord())
        setGuessedLetters([])
        setLanguages(allLanguages)
        setJustDied(null)
    }

  return (
    <>
      <Header />
      <ResultBox justDied={justDied} isGameOver={isGameOver} isGameWon={isGameWon} word={word} />
      <LanguagesBox languages={languages} />
      <InputView word={word} guessedLetters={guessedLetters}/>
      <InputButtons 
          word={word} 
          letters={letters} 
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          isGameOver={isGameOver}
          setJustDied={setJustDied} // if the user guesses correctly then no language die
      />
        {isGameOver ? <NewGameButton onClick={resetGame} /> : null}
    </>
  )
}

