export default function Language({language, bgColor, color, isAlive}) {
    return (
        // if the guess was wrong
        // the next language will be marked as dead
        // Use span for semantic correctness as these are inline status indicators
        <span 
            className={`language ${!isAlive ? "lost" : ""}`}
            style={{background: `${bgColor}`, color: `${color}`}}
            /* aria-label identifies the language and its status to screen readers */
            aria-label={`${language}${!isAlive ? " - lost" : ""}`}
        >
            {language}
        </span>
    )
}