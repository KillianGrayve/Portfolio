import React from 'react';
import NavList from '../props/navList';
import './header.scss';

export default function NavBar() {
    const listNav = [
        { onde: '/home', classe: 'links', txt: 'Home' },
        { onde: '/sobre', classe: 'links', txt: 'Sobre' },
        { onde: '/projetos', classe: 'links', txt: 'Projetos' },
        { onde: '/experiencia', classe: 'links', txt: 'Experiência' },
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
