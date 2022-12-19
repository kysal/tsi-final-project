import { Link } from 'react-router-dom'
import './MainHeading.css'

function MainHeading() {
    return (
        <Link to={'/'}>
            <div className='main-title'>
                <h1>Movie Rater</h1>
            </div>
        </Link>
    )
}

export default MainHeading;