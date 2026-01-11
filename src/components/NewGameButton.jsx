export default function NewGameButton({onClick}) {
    return (
        // if the game is over then display a button to start a new game
        <button onClick={onClick} className={"new-game"}>New Game</button>
    )
}