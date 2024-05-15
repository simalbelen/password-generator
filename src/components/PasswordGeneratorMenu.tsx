import { useTranslation } from 'react-i18next'
import { Divider } from '@nextui-org/react'
import { useState } from 'react'
import LengthSelector from './LengthSelector'
import PasswordView from './PasswordView'
import OptionsSelector from './OptionsSelector'
import SecurityInfo from './SecurityInfo'

function PasswordGeneratorMenu() {
    const { t } = useTranslation()
    const [password, setPassword] = useState<string>('')
    const [passwordLength, setPasswordLength] = useState<number>(16)
    const [selectedOptions, setSelectedOptions] = useState<string[]>([
        'uppercase',
        'lowercase',
        'numbers',
        'symbols',
    ])

    return (
        <>
            <div className="bg-primary h-full w-full flex justify-center items-center flex-col gap-4 select-none">
                <div className="bg-secondary w-5/6 lg:w-3/5 h-16 lg:h-20 rounded-xl flex justify-between items-center py-2 px-2 lg:px-4">
                    <PasswordView
                        password={password}
                        setPassword={setPassword}
                        selectedOptions={selectedOptions}
                        passwordLength={passwordLength}
                    />
                </div>
                <div className="w-5/6 md:w-3/5 h-2/6 md:h-2/5 flex flex-col md:flex-row gap-4">
                    <div className="bg-secondary w-full md:w-2/3 h-full rounded-xl flex flex-col">
                        <span className="text-xl items-center w-full text-center p-2">
                            {t('password-customization')}
                        </span>
                        <div className="h-full flex justify-between px-1 md:px-4 pb-2 md:pb-4 gap-4">
                            <div className="w-full flex justify-around flex-col items-center">
                                <LengthSelector
                                    passwordLength={passwordLength}
                                    setPasswordLength={setPasswordLength}
                                />
                            </div>
                            <Divider
                                orientation="vertical"
                                className="bg-primary"
                            />
                            <div className="w-full h-full">
                                <OptionsSelector
                                    selectedOptions={selectedOptions}
                                    setSelectedOptions={setSelectedOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex bg-secondary w-1/3 h-full rounded-xl">
                        <SecurityInfo password={password} />
                    </div>
                </div>
                <div className="flex md:hidden bg-secondary w-5/6 h-48 rounded-xl">
                    <SecurityInfo password={password} />
                </div>
            </div>
        </>
    )
}

export default PasswordGeneratorMenu
