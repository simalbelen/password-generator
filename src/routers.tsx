import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Management from './pages/Management'
import Profitability from './pages/Profitability'
import Scrap from './pages/Scrap'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="management">
                    <Route index element={<Management />} />
                </Route>
                <Route path="profitability">
                    <Route index element={<Profitability />} />
                </Route>
                <Route path="scrap">
                    <Route index element={<Scrap />} />
                </Route>
                {
                    //Aqui mas routers
                }
            </Route>
        </Routes>
    )
}
