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
    const MIN_VALUE = 1
    const MAX_VALUE = 30

    return (
        <>
            <div className="h-1/4 flex justify-center items-center">
                <span>{t('password-length')}</span>
            </div>
            <div className="h-3/4 w-full flex flex-col justify-around items-center">
                <span className="bg-primary w-20 h-16 text-4xl flex justify-center items-center rounded-full">
                    {passwordLength}
                </span>
                <div className="flex w-full gap-2 justify-center items-center">
                    <div
                        className="flex justify-center items-center bg-primary w-10 aspect-square rounded-full hover:cursor-pointer m-2 p-2"
                        onClick={() => {
                            passwordLength <= MIN_VALUE
                                ? setPasswordLength(MIN_VALUE)
                                : setPasswordLength(passwordLength - 1)
                        }}
                    >
                        <MinusIcon color="currentColor" />
                    </div>
                    <Slider
                        size="lg"
                        maxValue={MAX_VALUE}
                        minValue={MIN_VALUE}
                        step={1}
                        color="primary"
                        value={passwordLength}
                        onChange={(value: number | number[]) => {
                            if (typeof value === 'number') {
                                setPasswordLength(value)
                            } else {
                                setPasswordLength(value[0])
                            }
                        }}
                        className="w-11/12"
                        classNames={{
                            thumb: 'after:bg-secondary',
                            trackWrapper:
                                'border-3 rounded-full border-primary h-7 bg-secondary',
                            track: 'h-7',
                        }}
                    />
                    <div
                        className="flex justify-center items-center bg-primary w-10 aspect-square rounded-full hover:cursor-pointer m-2 p-2"
                        onClick={() => {
                            passwordLength >= 30
                                ? setPasswordLength(30)
                                : setPasswordLength(passwordLength + 1)
                        }}
                    >
                        <PlusIcon color="currentColor" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LengthSelector
