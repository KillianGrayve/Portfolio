import {} from 'react-icons/ri';
import NavList from '../props/navList/index';
import './style.scss';

export default function MobileBtn() {
    const listNav = [
        { onde: '/home', classe: 'links', txt: 'Home' },
        { onde: '/sobre', classe: 'links', txt: 'Sobre' },
        { onde: '/experiencia', classe: 'links', txt: 'Experiência' },
        { onde: '/projetos', classe: 'links', txt: 'Projetos' },
    ];

    return (
        <div className="nav">
            <ul className="mobile__menu">
                <li>
                    <div className="line__first" />
                </li>
                <li>
                    <div className="line__second" />
                </li>
                <li>
                    <div className="line__third" />
                </li>

                <nav className="navbar__mobile">
                    <div className="navbar__mobile-box">
                        <ul className="navbar__mobile-links">
                            {listNav.map((e) => (
                                <NavList onde={e.onde} classe={e.classe} txt={e.txt} />
                            ))}
                        </ul>
                    </div>
                </nav>
            </ul>
        </div>
    );
}