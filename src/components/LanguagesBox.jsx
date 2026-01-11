import Language from "./Language.jsx"
export default function LanguagesBox({languages}) {
    return (
        <section 
            className={"languages"}
            aria-label={"Programming languages"}
        >
            {languages.map(language =>
                <Language key={language.id} language={language.name}
                bgColor={language.bgColor} color={language.color}
                isAlive={language.alive}/>)}
        </section>
    )
}