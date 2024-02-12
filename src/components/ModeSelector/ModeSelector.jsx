import './ModeSelector.css'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

const ModeSelector = ({toogleTheme}) => {
    const changeMode = () => {
        toogleTheme()
    }

    return (
        <div className='mode-selector-div' onClick={changeMode}>
            <img src={sun} className="mode-selector-svg" alt="Sun logo" />
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <img src={moon} className="mode-selector-svg" alt="Moon logo" />
        </div>
        
    )
}

export default ModeSelector

