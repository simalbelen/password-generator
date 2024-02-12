import { useState } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import { AppRouter } from '../routes/AppRouter'
import './Layout.scss'

const Layout = () => {
    const [nightMode, setNightMode] = useState(false)

    const appClassName = nightMode ? 'night-mode' : 'day-mode'
    const toogleTheme = () => {
        setNightMode(!nightMode)
        console.log(nightMode)
    }

    const dict_titles = {
        '/': 'Password Generator',
        '/planner': 'Not Found',
    }

    return (
        <div className={appClassName}>
            <NavigationBar
                title={dict_titles[location.pathname]}
                toogleTheme={toogleTheme}
            />
            <AppRouter />
        </div>
    )
}

export default Layout
