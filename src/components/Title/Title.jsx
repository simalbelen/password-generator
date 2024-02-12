import lock from '../../assets/lock.png'
import './Title.css'

const Title = ({title}) => {
    return (
        <>
            <div className="title-w-img">
                <img src={lock} className="logo" alt="Lock logo" />
                <h3>{title}</h3>
            </div>
        </>
    )
}
export default Title
