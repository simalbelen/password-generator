import './NavigationBar.css'
import ModeSelector from '../ModeSelector/ModeSelector'
import DropdownButton from '../DropdownButton/DropdownButton'
import Title from '../Title/Title'


const NavigationBar = ({ title, toogleTheme }) => {
    const foo = (language) => {
        console.log(language)
    }
    return (
        <>
            <div className="navigation-bar">
                <ModeSelector toogleTheme={toogleTheme} />
                <Title title={title} />
                <DropdownButton
                    label={'Languages'}
                    options={['English', 'Español']}
                    chooseOption={foo}
                />
            </div>
        </>
    )
}

export default NavigationBar
