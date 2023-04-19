import Header from "./Header"
import Searchbar from "./Searchbar"
import Entry from "./Entry"

const Dictionary = ({isDarkMode, setIsDarkMode, searchWord, searchTerm}) => {
    return (
        <article className='dictionary container'>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            <Searchbar searchWord={searchWord}/>
            <Entry searchTerm={searchTerm}/>
      </article>
    )
}

export default Dictionary