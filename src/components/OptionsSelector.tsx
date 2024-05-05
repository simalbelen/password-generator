import { Checkbox, CheckboxGroup } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

interface OptionsSelectorProps {
    selectedOptions: string[]
    setSelectedOptions: (selectedOptions: string[]) => void
}

function OptionsSelector({
    selectedOptions,
    setSelectedOptions,
}: OptionsSelectorProps) {
    const { t } = useTranslation()

    return (
        <>
            <div className="h-1/4 flex justify-center items-center">
                <span className="w-full text-center align-top">
                    {t('password-options')}
                </span>
            </div>

            <div className="h-3/4">
                <CheckboxGroup
                    color="primary"
                    className="text-secondary"
                    value={selectedOptions}
                    onValueChange={setSelectedOptions}
                >
                    <Checkbox value="uppercase">{t('uppercase')}</Checkbox>
                    <Checkbox value="lowercase">{t('lowercase')}</Checkbox>
                    <Checkbox value="numbers">{t('numbers')}</Checkbox>
                    <Checkbox value="symbols">{t('symbols')}</Checkbox>
                </CheckboxGroup>
            </div>
        </>
    )
}

export default OptionsSelector
