import { useTranslation } from 'react-i18next'
import { Divider } from '@nextui-org/react'
import { useState } from 'react'
import LengthSelector from './LengthSelector'
import PasswordView from './PasswordView'
import OptionsSelector from './OptionsSelector'
import SecurityInfo from './SecurityInfo'

function PasswordGeneratorMenu() {
    const { t } = useTranslation()
    const [password, setPassword] = useState<string>('Esta es mi password')
    const [passwordLength, setPasswordLength] = useState<number>(16)
    const [security, setSecurity] = useState<number>(0) //0,1,2,3,4
    const [selectedOptions, setSelectedOptions] = useState<string[]>([
        'uppercase',
        'lowercase',
        'numbers',
        'symbols',
    ])

    return (
        <>
            <div className="bg-secondary dark:bg-secondaryNight h-full w-full flex justify-center items-center flex-col gap-4 select-none">
                <div className="bg-primary dark:bg-primaryNight w-3/5 h-12 rounded-xl flex justify-between items-center py-2 px-4">
                    <PasswordView
                        password={password}
                        setPassword={setPassword}
                        selectedOptions={selectedOptions}
                        passwordLength={passwordLength}
                        setSecurity={setSecurity}
                    />
                </div>
                <div className="w-3/5 h-64 flex gap-4">
                    <div className="bg-primary dark:bg-primaryNight w-2/3 h-full rounded-xl flex flex-col">
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
                                className="bg-black"
                            />
                            <div className="w-full flex flex-col justify-center">
                                <OptionsSelector
                                    selectedOptions={selectedOptions}
                                    setSelectedOptions={setSelectedOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary dark:bg-primaryNight w-1/3 h-full rounded-xl flex flex-col">
                        <SecurityInfo security={security} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGeneratorMenu
