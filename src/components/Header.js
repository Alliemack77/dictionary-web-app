import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
// import { WordContext } from '../context/context'
import { BiBookAlt } from 'react-icons/bi'
import Button from './Button'

const Header = () => {

    const {setIsDarkMode} = useContext(ThemeContext)
 
    const  toggleTheme = (e) => {
        e.preventDefault()
        setIsDarkMode(prev => !prev)
    }

    return (
        <header aria-label='dictionary'>
            <BiBookAlt />
            <h1 className='sr-only'>Dictionary App</h1>
            <Button icon='theme-toggle' handleToggle={toggleTheme}/>
        </header>
    )
}
export default Header
