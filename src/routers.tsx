import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home />} />
                <Route path="password-generator">
                    <Route index element={<Home />} />
                </Route>
                {
                    //Aqui mas routers
                }
            </Route>
        </Routes>
    )
}
