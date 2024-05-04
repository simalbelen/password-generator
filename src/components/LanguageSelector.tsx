import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@nextui-org/react'
import EsFlagIcon from './Icons/EsFlagIcon'
import EnFlagIcon from './Icons/EnFlagIcon'
import { useTranslation } from 'react-i18next'

function LanguageSelector() {
    const { t, i18n } = useTranslation()

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                        {t('language')}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    onAction={(key: string | number) =>
                        i18n.changeLanguage(key.toString())
                    }
                >
                    <DropdownItem key="en" startContent={<EnFlagIcon />}>
                        {t('en')}
                    </DropdownItem>
                    <DropdownItem key="es" startContent={<EsFlagIcon />}>
                        {t('es')}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default LanguageSelector
