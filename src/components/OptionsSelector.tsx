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
            <span className="w-full text-center">{t('password-options')}</span>
            <CheckboxGroup
                color="secondary"
                value={selectedOptions}
                onValueChange={setSelectedOptions}
            >
                <Checkbox value="uppercase">{t('uppercase')}</Checkbox>
                <Checkbox value="lowercase">{t('lowercase')}</Checkbox>
                <Checkbox value="numbers">{t('numbers')}</Checkbox>
                <Checkbox value="symbols">{t('symbols')}</Checkbox>
            </CheckboxGroup>
        </>
    )
}

export default OptionsSelector
