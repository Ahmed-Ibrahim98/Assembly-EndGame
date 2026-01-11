export default function ResultBox({justDied, isGameLost, isGameWon, word}) {
    function getMessage(justDied, isGameLost, isGameWon, word) {
        // if the game is over and the user didn't win then display a message letting them know they lost
        // if the user guessed incorrectly then display a message that a new language just died
        if (isGameLost) {
            return (
                <div className="banner banner-lose" role="alert">
                    <h2>Game over!</h2>
                    <p>The word was: <b>{word.toUpperCase()}</b></p>
                    <p>You lose! Better start learning Assembly 🫠</p>
                </div>
            )
        }
        else if (justDied){
            return (
                <div className={"banner outed-message"} role="status">
                    <p>{justDied.message}</p>
                </div>
            )
        }
        // if the user won then display a message letting them know they won
        if (isGameWon) {
            return (
                <div className="banner banner-win" role="alert">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </div>
            )
        }
    }

    return (
        <section 
            className={"result-box"}
            aria-live="polite"
            role="status"
        >
            {getMessage(justDied, isGameLost, isGameWon, word)}
        </section>
    )
}