import CopyIcon from './Icons/CopyIcon'
import ReloadIcon from './Icons/ReloadIcon'

interface PasswordViewProps {
    password: string
    setPassword: (password: string) => void
}

function PasswordView({ password, setPassword }: PasswordViewProps) {
    return (
        <>
            <span> {password} </span>
            <div className="flex gap-3">
                <div
                    className="flex justify-center items-center bg-secondary dark:bg-secondaryNight w-10 aspect-square rounded-full hover:cursor-pointer"
                    onClick={() => {
                        setPassword('Copiado!')
                    }}
                >
                    <CopyIcon color="black" />
                </div>
                <div
                    className="flex justify-center items-center bg-secondary dark:bg-secondaryNight w-10 aspect-square rounded-full hover:cursor-pointer"
                    onClick={() => {
                        setPassword('Recargado!')
                    }}
                >
                    <ReloadIcon color="black" />
                </div>
            </div>
        </>
    )
}

export default PasswordView
