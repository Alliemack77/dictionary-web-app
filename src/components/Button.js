import { CiSearch } from 'react-icons/ci'
import { BsPlayFill } from 'react-icons/bs'


const Button = ({icon, audioRef}) => {

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

}

export default Button