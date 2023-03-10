import {} from 'react-icons/ri';
import NavList from '../props/navList/index';
import './mobileBtn.scss';

export default function MobileBtn() {
    const listNav = [
        {id: 1, onde: '/home', txt: 'Home' },
        {id: 2, onde: '/sobre', txt: 'Sobre' },
        {id: 3, onde: '/projetos', txt: 'Projetos' },
        {id: 4, onde: '/experiencia', txt: 'Experiência' },
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
                                <NavList key={e.id} onde={e.onde} classe='links' txt={e.txt} />
                            ))}
                        </ul>
                    </div>
                </nav>
            </ul>
        </div>
    );
}
