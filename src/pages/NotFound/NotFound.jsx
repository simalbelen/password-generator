import { Link } from 'react-router-dom'
import imgPath from '../../assets/chilling_cat.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="page">
            <img className='not-found-image' src={imgPath} alt="Chilling cat" />
            <h1>404 Not Found</h1>
            <p>The page you&apos;re looking for does not seem to exist</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default NotFound
