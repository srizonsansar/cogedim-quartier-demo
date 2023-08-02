import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/home/Index';
import LesResidences from './pages/les-residences/Index';
import NewsListPage from './pages/les-actualites/Index';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/les-residences" element={<LesResidences />} />
                <Route path="/les-actualites" element={<NewsListPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;