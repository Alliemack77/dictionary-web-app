import { createContext, useState } from 'react'
import axios from 'axios'
import word from '../mock-data/mockEntry'

// creating context
const WordContext = createContext()

// gather state, fetch data and serve
const WordProvider = ({children}) => {
    // declaring state
    const [searchTerm, setSearchTerm] = useState(word)
    const [isDarkMode, setIsDarkMode] = useState(false)


    // fetching data
    const searchWord = (input) => {
        const options = {
        method: "GET", 
        url:  `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
        }

        axios.request(options).then((response) => {
        setSearchTerm(response.data)
        }).catch((error) => alert("Oops try again"))
    }

    // serving data to children 
    return (
        <WordContext.Provider 
            value={{
                searchTerm, 
                setSearchTerm,
                searchWord, 
                isDarkMode, 
                setIsDarkMode
            }}>
                {children}
        </WordContext.Provider>
    )
}

 
export {WordContext, WordProvider}


