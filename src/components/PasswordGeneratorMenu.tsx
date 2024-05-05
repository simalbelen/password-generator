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
                <div className="bg-secondary w-3/5 h-16 rounded-xl flex justify-between items-center py-2 px-4">
                    <PasswordView
                        password={password}
                        setPassword={setPassword}
                        selectedOptions={selectedOptions}
                        passwordLength={passwordLength}
                    />
                </div>
                <div className="w-3/5 h-2/5 flex gap-4">
                    <div className="bg-secondary w-2/3 h-full rounded-xl flex flex-col">
                        <span className="text-xl items-center w-full text-center p-2">
                            {t('password-customization')}
                        </span>
                        <div className=" h-full flex justify-between px-4 pb-4 gap-4">
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
                    <div className="bg-secondary w-1/3 h-full rounded-xl flex flex-col">
                        <SecurityInfo password={password} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGeneratorMenu
