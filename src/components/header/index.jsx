import React from 'react';
import NavList from '../props/navList';
import './header.scss';

export default function NavBar() {
    const listNav = [
        { onde: '/home', txt: 'Home' },
        { onde: '/sobre', txt: 'Sobre' },
        { onde: '/projetos', txt: 'Projetos' },
        { onde: '/experiencia', txt: 'Experiência' },
    ];

    return (
        <div className="box">
            <nav className="navbar">
                <div className="navbar__el el">
                    Portfólio
                </div>

                
                <ul className="navbar__menu">
                    {listNav.map((e) => (
                        <NavList key={e} onde={e.onde} classe='links' txt={e.txt} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
