import { useState } from 'react'
import Button from './Button'

const Searchbar = ({searchWord}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        searchWord(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={input}
                onChange={(e) => {setInput(e.target.value)}}
                type='text' 
                placeholder='Enter a word'
            ></input>
            <Button icon='search' />
        </form>

    )
}
export default Searchbar