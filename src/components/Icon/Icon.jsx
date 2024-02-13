import './Icon.css'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import lock from '../../assets/lock.svg'
import copy from '../../assets/copy.svg'
import refresh from '../../assets/refresh.svg'

const Icon = ({name}) => {

    const icon_translator = {
        "moon":moon,
        "sun":sun,
        "lock":lock,
        "copy":copy,
        "refresh":refresh,
    }

    return (
            <img src={icon_translator[name]} className="colored-svg" alt="${name} logo"/>
    )
}

export default Icon

