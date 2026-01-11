export default function Language({language, bgColor, color, isAlive}) {
    return (
        // if the guess was wrong
        // the next language will be marked as dead
        <span 
            className={`language ${!isAlive ? "lost" : ""}`}
            style={{background: `${bgColor}`, color: `${color}`}}
            aria-label={`${language}${!isAlive ? " - lost" : ""}`}
        >
            {language}
        </span>
    )
}