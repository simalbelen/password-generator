import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}
