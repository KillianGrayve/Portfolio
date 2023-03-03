import React from 'react';
import { NavLink } from 'react-router-dom';
import './_navbar.scss';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__el el">
                <p>Portfólio</p>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <ul className="navbar__menu">
                <li>
                    <NavLink
                        to="/home"
                        className="links"
                        style={(active) => (active ? undefined : undefined)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Sobre"
                        className="links"
                        style={({ active }) => (active ? undefined : undefined)}
                    >
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Experiencia"
                        className="links"
                        style={({ active }) => (active ? undefined : undefined)}
                    >
                        Experiencia
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Projetos"
                        className="links"
                        style={({ active }) => (active ? undefined : undefined)}
                    >
                        Projetos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
