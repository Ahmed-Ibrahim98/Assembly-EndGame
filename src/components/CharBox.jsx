export default function CharBox({char}) {
    const isRevealed = char !== ""
    return (
        <span 
            className={"letter"}
            aria-label={isRevealed ? `Letter: ${char.toUpperCase()}` : "Blank letter"}
        >
            {char.toUpperCase()}
        </span>
    )
}