import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import '../i18n/config'
import { useTranslation } from 'react-i18next'

import LanguageSelector from './LanguageSelector'
import ModeSelector from './ModeSelector'

function Header() {
    const { t } = useTranslation()
    //collapsed coger estado en useState y modificar
    return (
        <Navbar className="bg-primary dark:bg-primaryNight select-none">
            <NavbarContent justify="start">
                <NavbarItem>
                    <ModeSelector />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <span className="text-3xl">{t('title')}</span>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <LanguageSelector />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
