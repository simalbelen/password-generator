import './Chip.css'

const Chip = ({ label, variant }) => {
    return (
        <span id="chip" className={variant}>
            {label}
        </span>
    )
}
export default Chip
