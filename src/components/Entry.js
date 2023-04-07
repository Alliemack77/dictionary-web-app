import { useRef } from 'react'
import AudioTrack from './AudioTrack'
import Button from './Button'

const Entry = ({searchTerm}) => {
    const audioRef = useRef()

    let word = searchTerm[0]
    let synonyms = word.meanings[0].synonyms
    let track = word.phonetics[0].audio === '' ? word.phonetics[1].audio : word.phonetics[0].audio

    return (
        <article className='entry'>
            <div className='word'>
                <h1>{word.word}</h1>
                {word.phonetic ? <p>{word.phonetic}</p> : null}
                <AudioTrack 
                    audioRef={audioRef} 
                    track={track}
                />
                <Button icon='play' audioRef={audioRef}/>
            </div>
            {word.meanings.map((item) => {
                return (
                    <div>
                        <h2>{item.partOfSpeech}</h2>
                        <p>Meaning</p>
                     
                        {item.partOfSpeech === 'noun' && (
                            <>
                                <div className='definition'>
                                    { item.definitions.map((def) => {
                                        return (
                                            <p key={item.text}>{def.definition}</p>
                                        )
                                    })}
                                </div>
                                <p>Synonyms</p>
                                <div>
                                    {synonyms.map((syn) => <p key={syn}>{syn}</p>)}
                                </div>
                            </>
                        )}
                        
                        {item.partOfSpeech !== 'noun' && (
                            <>
                                <div className='definition'>
                                    { item.definitions.map((def) => {
                                        let example = def.example
                                        return (
                                            <>
                                                <p key={item.text}>{def.definition}</p>
                                                <p key={item.word}>
                                                    <span className='sr-only'>Example: </span>
                                                    {def.example === undefined ? null : `"${example}"`}
                                                </p>
                                            </>
                                        )
                                        
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </article>
    )
}
export default Entry