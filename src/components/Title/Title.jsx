import lock from '../../assets/lock.png'
import './Title.css'

const Title = ({title}) => {
    return (
        <>
            <div className="title-w-img">
                <img src={lock} className="logo" alt="Lock logo" />
                <h1>{title}</h1>
            </div>
        </>
    )
}
export default Title
