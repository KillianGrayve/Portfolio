import { BiCopyright } from 'react-icons/bi';
import './footer.scss';

export default function Footer() {
    return (
        <footer>
            <h2 className="footer__txt">
            <abbr><BiCopyright /></abbr> Copyright 2023
            </h2>
        </footer>
    );
}
