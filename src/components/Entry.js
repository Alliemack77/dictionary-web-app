import { useRef } from 'react'
import AudioTrack from './AudioTrack'
import Button from './Button'

const Entry = ({searchTerm}) => {
    const audioRef = useRef()

    let word = searchTerm[0]
    let synonyms = word.meanings[0].synonyms
    let track = word.phonetics[0].audio || word.phonetics[1].audio
    // === '' ?  : word.phonetics[0].audio

    return (
        <article className='entry'>
            <div className='word'>
                <div>
                    <h1 className='fs-600 ff-accent'>{word.word}</h1>
                    {word.phonetic ? <p className='text-accent'>{word.phonetic}</p> : null}
                </div>
                <div>
                    <AudioTrack audioRef={audioRef} track={track}/>
                    <Button icon='play' audioRef={audioRef}/>
                </div>
            </div>
            {word.meanings.map((item) => {
                return (
                    <div className='definition-container'>
                        <h2 className='fs-500 ff-accent'>{item.partOfSpeech}<span className='deco'></span></h2>
                        <p className='text-grey'>Meaning</p>
                     
                        {item.partOfSpeech === 'noun' && (
                            <>
                                <ul className='definition'>
                                    { item.definitions.map((def) => {
                                        return (
                                            <li key={item.text}>
                                                <p>{def.definition}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className='text-grey'>Synonyms</p>
                                <div className='flex flex-wrap'>
                                    {synonyms.map((syn) => <p className="text-accent fw-700" key={syn}>{syn}</p>)}
                                </div>
                            </>
                        )}
                        
                        {item.partOfSpeech !== 'noun' && (
                            <>
                                <ul className='definition'>
                                    { item.definitions.map((def) => {
                                        let example = def.example
                                        return (
                                            <>
                                                <li key={item.text}>{def.definition}
                                                    <p className='text-grey' key={item.word}>
                                                        <span className='sr-only'>Example: </span>
                                                        {def.example === undefined ? null : `"${example}"`}
                                                    </p>
                                                </li>
                                            </>
                                        )
                                        
                                    })}
                                </ul>
                            </>
                        )}
                    </div>
                )
            })}
        </article>
    )
}
export default Entry