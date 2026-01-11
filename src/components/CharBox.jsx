export default function CharBox({char, isGuessed, isGameLost}) {
    const isRevealed = char !== ""
    /* aria-label identifies the letter and its state (guessed, revealed on loss, or blank) */
    const ariaLabel = isGuessed 
        ? `Letter: ${char.toUpperCase()}` 
        : isGameLost 
            ? `Missed letter: ${char.toUpperCase()}` 
            : "Blank letter";

    return (
        /* Use span for inline letter boxes and provide aria-label for accessibility */
        <span 
            className={"letter"}
            aria-label={ariaLabel}
            style={{color: !isGuessed ? "#ba2121" : undefined}}
        >
            {isGuessed ? char.toUpperCase() : isGameLost ? char.toUpperCase() : ""}
        </span>
    )
}