import toast from 'react-hot-toast'
import CopyIcon from './Icons/CopyIcon'
import ReloadIcon from './Icons/ReloadIcon'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import zxcvbn from 'zxcvbn'

interface PasswordViewProps {
    password: string
    setPassword: (password: string) => void
    selectedOptions: string[]
    passwordLength: number
    setSecurity: (security: number) => void
}

function PasswordView({
    password,
    setPassword,
    selectedOptions,
    passwordLength,
    setSecurity,
}: PasswordViewProps) {
    const { t } = useTranslation()

    useEffect(() => {
        generatePassword()
    }, [passwordLength, selectedOptions])

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numbersChars = '0123456789'
    const symbolsChars = '!@#$%^&*()-_=+[{]}|;:,.<>?'

    const generatePassword = () => {
        let possibleChars = ''
        if (selectedOptions.includes('uppercase'))
            possibleChars += uppercaseChars
        if (selectedOptions.includes('lowercase'))
            possibleChars += lowercaseChars
        if (selectedOptions.includes('numbers')) possibleChars += numbersChars
        if (selectedOptions.includes('symbols')) possibleChars += symbolsChars

        let password = ''
        for (let i = 0; i < passwordLength; i++) {
            const indice = Math.floor(Math.random() * possibleChars.length)
            password += possibleChars.charAt(indice)
        }

        setPassword(password)
        setSecurity(zxcvbn(password).score)
    }

    return (
        <>
            <span> {password} </span>
            <div className="flex gap-3">
                <div
                    className="flex justify-center items-center bg-secondary dark:bg-secondaryNight w-10 aspect-square rounded-full hover:cursor-pointer"
                    onClick={() => {
                        navigator.clipboard.writeText(password)
                        toast.success(t('coppied-password'))
                    }}
                >
                    <CopyIcon color="black" />
                </div>
                <div
                    className="flex justify-center items-center bg-secondary dark:bg-secondaryNight w-10 aspect-square rounded-full hover:cursor-pointer"
                    onClick={generatePassword}
                >
                    <ReloadIcon color="black" />
                </div>
            </div>
        </>
    )
}

export default PasswordView
