import { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { AppRouter } from '../routes/AppRouter'
import './Layout.css'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

const Layout = () => {
    const [nightMode, setNightMode] = useState(false)
    const [language, setLanguage] = useState('es')

    const appClassName = nightMode ? 'night-mode' : 'day-mode'
    const toogleTheme = () => {
        setNightMode(!nightMode)
    }

    const dict_titles = {
        '/': 'Password Generator',
        '/planner': 'Not Found',
    }

    return (
        <div className={appClassName}>
            <I18nextProvider i18n={i18next}>
                <NavigationBar
                    title={dict_titles[location.pathname]}
                    toogleTheme={toogleTheme}
                />
                <AppRouter/>
            </I18nextProvider>
        </div>
    )
}

export default Layout
