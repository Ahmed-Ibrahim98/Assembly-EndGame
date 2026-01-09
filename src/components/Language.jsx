export default function Language({language, bgColor, color, isAlive}) {
    return (
        // if the guess was wrong
        // the next language will be marked as dead
        <div className={`language ${!isAlive ? "lost" : ""}`}
              style={{background: `${bgColor}`, color: `${color}`}}>{language}</div>
    )
}