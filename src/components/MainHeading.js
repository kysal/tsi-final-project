import { Link } from 'react-router-dom'
import './MainHeading.css'

function MainHeading() {
    return (
        
        <div className='main-title'>
            <span className='left'>
                <Link to={'/'}>
                    <span className='main-text'>
                        <h1>Movie Rater</h1>
                    </span>
                </Link>
            </span>
        </div>
    )
}

export default MainHeading;