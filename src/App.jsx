/* eslint-disable import/no-extraneous-dependencies */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/navbar';
import Experiencia from './pages/experiencia';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Projetos from './pages/projetos';
import Sobre from './pages/Sobre';

export default function App() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/experiencia" element={<Experiencia />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
