import { useTranslation } from 'react-i18next'
import PlusIcon from './Icons/PlusIcon'
import MinusIcon from './Icons/MinusIcon'
import { Slider } from '@nextui-org/react'

interface LengthSelectorProps {
    passwordLength: number
    setPasswordLength: (passwordLength: number) => void
}

function LengthSelector({
    passwordLength,
    setPasswordLength,
}: LengthSelectorProps) {
    const { t } = useTranslation()

    return (
        <>
            <span>{t('password-length')}</span>
            <span className="bg-secondary dark:bg-secondaryNight w-20 h-16 text-4xl flex justify-center items-center rounded-full">
                {passwordLength}
            </span>
            <div className="flex w-full gap-2 p-2">
                <div
                    className="flex justify-center items-center bg-secondary dark:bg-secondaryNight w-10 aspect-square rounded-full hover:cursor-pointer"
                    onClick={() => {
                        passwordLength <= 4
                            ? setPasswordLength(4)
                            : setPasswordLength(passwordLength - 1)
                    }}
                >
                    <MinusIcon color="black" />
                </div>
                <Slider
                    size="lg"
                    maxValue={30}
                    minValue={4}
                    step={1}
                    color="secondary"
                    value={passwordLength}
                    onChange={(value: number | number[]) => {
                        if (typeof value === 'number') {
                            setPasswordLength(value)
                        } else {
                            setPasswordLength(value[0])
                        }
                    }}
                    className="w-11/12"
                />
                <div
                    className="flex justify-center items-center bg-secondary dark:bg-secondaryNight w-10 aspect-square rounded-full hover:cursor-pointer"
                    onClick={() => {
                        passwordLength >= 30
                            ? setPasswordLength(30)
                            : setPasswordLength(passwordLength + 1)
                    }}
                >
                    <PlusIcon color="black" />
                </div>
            </div>
        </>
    )
}

export default LengthSelector
