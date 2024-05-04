import { Switch } from '@nextui-org/react'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'
import { useEffect, useState } from 'react'

function ModeSelector() {
    const [darkMode, setDarkMode] = useState(false)

    // Change the icons inside the button based on previous settings
    useEffect(() => {
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])

    const toggleMode = () => {
        setDarkMode(!darkMode)
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            }
        }
    }

    return (
        <>
            <Switch
                size="lg"
                color="secondary"
                className="checked:"
                isSelected={darkMode}
                onValueChange={toggleMode}
                thumbIcon={({ isSelected }) =>
                    isSelected ? (
                        <MoonIcon color={'black'} />
                    ) : (
                        <SunIcon color={'black'} />
                    )
                }
            />
        </>
    )
}

export default ModeSelector
