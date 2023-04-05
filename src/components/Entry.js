import mockEntry from "../mock-data/mockEntry"
import Button from "./Button"

const Entry = ({word}) => {



    return (
        <div className="entry">
            <div>
                <h1>{word[0].word}</h1>
                {word[0].phonetics.map((item) => {
                    return (
                        <p key={item.text}>/{item.text}/</p>
                    )
                })}
                <Button icon="play" />
            </div>
            {word[0].meanings.map((item) => {
                return (
                    <div>
                        <h2>{item.partOfSpeech}</h2>
                        <p>Meaning</p>
                        <ul>
                        { item.definitions.map((def) => {
                            return (
                                <li>{def.definition}</li>
                            )
                            
                        })}
                        </ul>
                     
                        {item.partOfSpeech === 'noun' ? (
                            
                            item.definitions.map((def) => {
                                return (
                                    <>
                                        <p>Synonyms</p>
                                        {def.synonyms.map((syn) => {
                                            return (
                                                <li>{syn}</li>
                                            )
                                        })}
                                    </>
                                )
                            })
                        ) : (
                            <p>"{item.definitions.map((def) => {
                                return (
                                    def.example
                                )
                            })}"</p>
                            )
                        }
                    </div>
                )
            })}
        </div>
    )
}
export default Entry