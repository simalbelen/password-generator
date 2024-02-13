import './RangeSlider.css'

const RangeSlider = ({min, max, passwordLength, setPasswordLength, step}) => {
    
    const onChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setPasswordLength(newValue)
        console.log(newValue)
    }

    return (
        <input onChange={onChange} type="range" className='range-slider' min={min} max={max} value={passwordLength} step={step}/>
    )
}

export default RangeSlider
