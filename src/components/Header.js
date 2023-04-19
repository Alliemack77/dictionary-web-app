import { BiBookAlt } from 'react-icons/bi'
import Button from './Button'

const Header = ({isDarkMode, setIsDarkMode}) => {

    const  toggleTheme = (e) => {
        e.preventDefault()
        setIsDarkMode(prev => !prev)
    }

    return (
        <header aria-label='dictionary'>
            <BiBookAlt />
            <h1 className='sr-only'>Dictionary App</h1>
            <Button icon='theme-toggle' isDarkMode={isDarkMode} handleToggle={toggleTheme}/>
        </header>
    )
}
export default Header
