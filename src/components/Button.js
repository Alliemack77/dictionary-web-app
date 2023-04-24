import { useContext } from 'react'
// import { ThemeContext } from '../context/themeContext'
import { WordContext } from '../context/context'
import { CiSearch } from 'react-icons/ci'
import { BsPlayFill } from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs' 

const Button = ({icon, audioRef, handleToggle}) => {
    const {isDarkMode} = useContext(WordContext)

    const playTrack = () => {
        audioRef.current.play()
    }
    
    if(icon === 'search') {
        return (
            <button 
                className='button search' 
                type='search'>
                    <CiSearch/>
                    <span className='sr-only'>Search</span>
            </button>
        )
    }

    if(icon === 'play') {
        return (
            <button 
            className='button play'
            type='button'
            onClick={playTrack}>
                <BsPlayFill/>
                <span className='sr-only'>Play</span>
            </button>
        )
    }

    if(icon === 'theme-toggle') {
        return (
            <div className='switch-container'>
                <button 
                    className={`button theme-toggle ${isDarkMode? "checked" : ""}`} 
                    type='button' 
                    role='switch'
                    aria-checked={isDarkMode}
                    onClick={handleToggle}>
                    <span className='sr-only'>dark mode toggle</span>
                </button>
                <BsFillMoonFill />
            </div>
        )
    }

}

export default Button