import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"
import Header from "./Header"
import Searchbar from "./Searchbar"
import Entry from "./Entry"


const Dictionary = () => {
    const {isDarkMode} = useContext(ThemeContext) 
    
    return (
        <main className={ isDarkMode ? 'dark' : 'light'}>
            <article className='dictionary container'>
                <Header />
                <Searchbar />
                <Entry />
            </article>
        </main>
        
    )
}

export default Dictionary