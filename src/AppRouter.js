import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/home/Index';
import LesResidences from './pages/les-residences/Index'


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/les-residences" element={<LesResidences />} />
                    {/* Add more routes for additional pages */}
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;