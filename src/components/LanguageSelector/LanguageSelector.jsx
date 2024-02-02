import './LanguageSelector.css'

const LanguageSelector = ({ label, variant }) => {
    return (
        <span id="chip" className={variant}>
            {label}
        </span>
    )
}
export default LanguageSelector
