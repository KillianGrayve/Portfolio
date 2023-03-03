import { BiCopyright } from 'react-icons/bi';
import './_footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__txt">
                Copyright <abbr><BiCopyright /></abbr>
            </h2>
        </footer>
    );
}
