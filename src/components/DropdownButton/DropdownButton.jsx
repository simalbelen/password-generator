import './DropdownButton.css'

const DropdownButton = ({ label, options, chooseOption }) => {

    const clickOnOption = (option) => {
        chooseOption(option)
        //Close dropdown
    }

    const writeOptions = () => {
        return options.map((option, index) => (
            <a key={index} onClick={() => clickOnOption(option)}>
              {option}
            </a>
        ));
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">{label}</button>
            <div className="dropdown-content">
                {writeOptions()}
            </div>
        </div>
    )
}
export default DropdownButton
