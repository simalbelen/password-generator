import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import '../i18n/config'
import { useTranslation } from 'react-i18next'

import LanguageSelector from './LanguageSelector'
import ModeSelector from './ModeSelector'

function Header() {
    const { t } = useTranslation()
    //collapsed coger estado en useState y modificar
    return (
        <Navbar
            className="bg-secondary select-none text-foreground"
            classNames={{ wrapper: 'max-w-[2048]' }}
        >
            <NavbarContent justify="start">
                <NavbarItem>
                    <ModeSelector />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent
                className="flex gap-2 lg:gap-4 w-full"
                justify="center"
            >
                <NavbarItem>
                    <span className="text-sm lg:text-3xl 2xl:text-4xl">
                        {t('title')}
                    </span>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="w-fit">
                <NavbarItem>
                    <LanguageSelector />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
