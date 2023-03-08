import React from 'react';
import NavList from '../props/navList';
import './style.scss';

export default function NavBar() {
    const listNav = [
        { onde: '/home', classe: 'links', txt: 'Home' },
        { onde: '/sobre', classe: 'links', txt: 'Sobre' },
        { onde: '/experiencia', classe: 'links', txt: 'Experiência' },
        { onde: '/projetos', classe: 'links', txt: 'Projetos' },
    ];

    return (
        <div className="box">
            <nav className="navbar">
                <div className="navbar__el el">
                    <p>Portfólio</p>
                </div>
                <ul className="navbar__menu">
                    {listNav.map((e) => (
                        <NavList onde={e.onde} classe={e.classe} txt={e.txt} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
