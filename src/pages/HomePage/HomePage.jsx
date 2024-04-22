import './HomePage.css'
import { useState } from 'react'
import Chip from '../../components/Chip/Chip'
import copy from '../../assets/copy.svg'
import refresh from '../../assets/refresh.svg'
import RangeSlider from '../../components/RangeSlider/RangeSlider'

const HomePage = () => {
    const lowercase = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]
    const uppercase = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ]
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const symbols = [
        '~',
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '{',
        '[',
        '}',
        ']',
        '|',
        '\\',
        ':',
        ',',
        ';',
        "'",
        '<',
        '>',
        '.',
        '?',
        '/',
    ]

    const [password, setPassword] = useState('Generara conradtraseña')
    const [passwordLength, setPasswordLength] = useState(16)
    const [useLowerCase, setUseLowerCase] = useState(true)
    const [useUpperCase, setUseUpperCase] = useState(true)
    const [useNumbers, setUseNumbers] = useState(true)
    const [useSymbols, setUseSymbols] = useState(true)

    const copyOnClipboard = () => {
        navigator.clipboard.writeText(password)
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    const generatePassword = () => {
        // Get del set de caracteres que se usan:
        let characters = useLowerCase ? lowercase : []
        characters = characters.concat(useUpperCase ? uppercase : [])
        characters = characters.concat(useNumbers ? numbers : [])
        characters = characters.concat(useSymbols ? symbols : [])

        let password = ''
        for (let i = 0; i < passwordLength; i++) {
            password += characters[getRandomInt(characters.length)]
        }
        setPassword(password)
    }
    return (
        <div className="password-generator">
            <div className="generated-password">
                <span className="password-text"> {password}</span>
                <div className="icon-container">
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
            <div className="password-content">
                <div className="password-customization">
                    <h2> ¡Personaliza tu contraseña! </h2>
                    <div className="password-customization-options">
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
                        <div className="separator" />
                        <div className="password-options">HOLA!</div>
                    </div>
                </div>
                <div className="password-info">
                    <Chip label={'Hola'} variant={'super-high-security'} />
                </div>
            </div>
            {/* <div>
                <span>Password length</span>
                <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                />
            </div>
             */}
        </div>
    )
}

export default HomePage
