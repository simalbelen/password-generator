import './ModeSelector.css'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

const ModeSelector = () => {
    return (
        <div className='mode-selector-div'>
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
