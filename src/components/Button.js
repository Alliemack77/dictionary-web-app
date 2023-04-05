import { CiSearch } from 'react-icons/ci'
import { BsPlayFill } from 'react-icons/bs'


const Button = ({icon}) => {
    return (
        <>
            <button 
                className={`button ${icon === 'search' ? 'submit' : 'play'}`} 
                type={ icon === 'search' ? 'submit' : 'text'}
            >
                { icon === 'search' && <CiSearch/> }
                { icon === 'play' && <BsPlayFill/> }
                <span className='sr-only'>{ icon === 'search' ? 'Search' : 'Play'}</span>
            </button>
          
        </>
        
    )
}

export default Button