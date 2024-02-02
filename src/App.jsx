// import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
// import Chip from './components/Chip/Chip'
import ModeSelector from './components/ModeSelector/ModeSelector'

export function App() {
    // const [passwordLength, setPasswordLength] = useState(0)

    return (
        <div>
            <ModeSelector/>
            <Title title={'Password Generator'} />
            <div className="generated-psw">
                <p> HOLA </p>
            </div>

            <div> 
                <span>Password length</span>
                <input type="checkbox" id="topping" name="topping" value="Paneer" />
            </div>
            {/* <Chip
                label={"Hola"}
                variant={"super-high-security"}/> */}
                
        </div>
    )
}
