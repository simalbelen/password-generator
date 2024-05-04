interface MinusIconProps {
    color: string
}

const MinusIcon = ({ color }: MinusIconProps) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={color}
            className="w-6 h-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    )
}

export default MinusIcon
