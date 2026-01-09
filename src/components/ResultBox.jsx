export default function ResultBox({justDied, isGameOver, isGameWon, word}) {
    function getMessage(justDied, isGameOver, isGameWon, word) {
        if (isGameOver && !isGameWon) {
            return (
                <div className="banner banner-lose">
                    <h2>Game over!</h2>
                    <p>The word was: <b>{word.toUpperCase()}</b></p>
                    <p>You lose! Better start learning Assembly 🫠</p>
                </div>
            )
        }
        else if (justDied){
            return <div className={"banner outed-message"}><p>{justDied.message}</p></div>
        }
        if (isGameWon) {
            return (
                <div className="banner banner-win">
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </div>
            )
        }
    }

    return (
        <section className={"result-box"}>
            {getMessage(justDied, isGameOver, isGameWon, word)}
        </section>
    )
}