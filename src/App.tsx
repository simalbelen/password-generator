import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './routers'
import GeneralLayout from './layouts/GeneralLayout'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <>
            <Toaster position="top-right" />
            <NextUIProvider>
                <Router>
                    <GeneralLayout>
                        <AppRouter />
                    </GeneralLayout>
                </Router>
            </NextUIProvider>
        </>
    )
}

export default App
