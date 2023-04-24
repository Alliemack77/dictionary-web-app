import { useContext, useState } from 'react'
import { WordContext } from "../context/context"
import Button from './Button'

const Searchbar = () => {
    const [input, setInput] = useState("")
    const {searchWord} = useContext(WordContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        searchWord(input)
        setInput("")
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input 
                value={input}
                onChange={(e) => {setInput(e.target.value)}}
                type='text' 
                placeholder='Enter a word'
            ></input>
            <Button icon='search'/>
        </form>

    )
}
export default Searchbar