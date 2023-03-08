import { BiCopyright } from 'react-icons/bi';
import './_footer.scss';

export default function Footer() {
    return (
        <footer>
            <h2 className="footer__txt">
                Copyright <abbr><BiCopyright /></abbr>
            </h2>
        </footer>
    );
}
