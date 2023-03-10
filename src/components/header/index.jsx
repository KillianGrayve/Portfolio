import React from 'react';
import NavList from '../props/navList';
import './header.scss';

export default function Header() {
    const listNavHeader = [
        {id: 1, onde: '/home', txt: 'Home' },
        {id: 2, onde: '/sobre', txt: 'Sobre' },
        {id: 3, onde: '/projetos', txt: 'Projetos' },
        {id: 4, onde: '/experiencia', txt: 'Experiência' },
    ];

    return (
        <div className="box">
            <nav className="navbar">
                <div className="navbar__el el">Portfólio</div>

                <ul className="navbar__menu">
                    {listNavHeader.map((e) => (
                        <NavList key={e.id} onde={e.onde} classe="links" txt={e.txt} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
