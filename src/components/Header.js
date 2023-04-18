import { BiBookAlt } from 'react-icons/bi'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs' 

const Header = ({isDarkMode, setIsDarkMode}) => {

    const  toggleTheme = (e) => {
        e.preventDefault()
        setIsDarkMode(prev => !prev)
    }

    return (
        <header aria-label='dictionary'>
            <BiBookAlt />
            <h1 className='sr-only'>Dictionary App</h1>
            <div className='switch-container'>
                <button 
                    className={`button theme-toggle ${isDarkMode? "checked" : ""}`} 
                    type='button' 
                    role='switch'
                    aria-checked={isDarkMode}
                    onClick={toggleTheme}>
                    <span className='sr-only'>dark mode toggle</span>
                </button>
                <BsFillMoonFill />
            </div>
        </header>
    )
}
export default Header
