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
            toggleMode(true)
        } else {
            toggleMode(false)
        }
    }, [])

    const toggleMode = (darkMode: boolean) => {
        setDarkMode(darkMode)
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
                isSelected={darkMode}
                onValueChange={(e) => {
                    toggleMode(e)
                }}
                classNames={{
                    thumb: 'bg-transparent border-transparent shadow-none',
                    wrapper: 'bg-primary',
                }}
                thumbIcon={({ isSelected }) =>
                    isSelected ? (
                        <SunIcon color={'black'} />
                    ) : (
                        <MoonIcon color={'currentColor'} />
                    )
                }
            />
        </>
    )
}

export default ModeSelector
