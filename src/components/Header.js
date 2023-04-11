import { BiBookAlt } from 'react-icons/bi'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs' 

const Header = ({isDarkMode, setIsDarkMode}) => {

    const  toggleTheme = (e) => {
        e.preventDefault()
        setIsDarkMode(prev => !prev)
    }

    return (
        <header>
            <BiBookAlt />
            <h1 className='sr-only'>Dictionary App</h1>
            <button className='button theme-toggle' type='button' onClick={toggleTheme}>
                { isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
                <span className='sr-only'>dark mode toggle</span>
            </button>
        </header>
    )
}
export default Header
