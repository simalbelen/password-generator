import {  Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import NotFound from '../../pages/NotFound/NotFound'

export const AppRouter = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    {/* Redirección a una ruta específica */}
                    <Route path="*" element={<Navigate to="/not-found" />} />

                    {/* Página 404 */}
                    <Route path="/not-found" element={<NotFound />} />
                </Routes>
          
        </>
    )
}

