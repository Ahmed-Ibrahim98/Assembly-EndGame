export default function CharBox({char}) {
    const isRevealed = char !== ""
    return (
        /* Use span for inline letter boxes and provide aria-label for accessibility */
        <span 
            className={"letter"}
            aria-label={isRevealed ? `Letter: ${char.toUpperCase()}` : "Blank letter"}
        >
            {char.toUpperCase()}
        </span>
    )
}