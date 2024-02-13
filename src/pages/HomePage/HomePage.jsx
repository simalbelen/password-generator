import './HomePage.css'
import { useState } from 'react'
import Chip from '../../components/Chip/Chip'
import copy from '../../assets/copy.svg'
import refresh from '../../assets/refresh.svg'
import RangeSlider from '../../components/RangeSlider/RangeSlider'

const HomePage = () => {
    const [password, setPassword] = useState('Generara conradtraseña')
    const [passwordLength, setPasswordLength] = useState(16)

    const copyOnClipboard = () => {
        navigator.clipboard.writeText(password)
    }

    const generatePassword = () => {
        setPassword('Otraaaa')
    }
    return (
        <div className="password-generator">
            <div className="generated-password">
                <p> {password}</p>
                <div>
                    <img
                        src={copy}
                        onClick={copyOnClipboard}
                        className="colored-svg"
                        alt="copy logo"
                    />
                    <img
                        src={refresh}
                        onClick={generatePassword}
                        className="colored-svg"
                        alt="refresh logo"
                    />
                </div>
            </div>
            <div className="password-customization">
                <h2> ¡Personaliza tu contraseña! </h2>
                <div className='password-customization-options'>
                    <div className="password-length">
                        LONGITUD
                        <p> {passwordLength}</p>
                        <RangeSlider
                            min={1}
                            max={50}
                            passwordLength={passwordLength}
                            setPasswordLength={setPasswordLength}
                            step={1}
                        />
                    </div>
                    <div className='separator'/>
                    <div className="password-options">
                        HOLA!
                    </div>
                </div>
            </div>
            <div>
                <span>Password length</span>
                <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                />
            </div>
            <Chip label={'Hola'} variant={'super-high-security'} />
        </div>
    )
}

export default HomePage
