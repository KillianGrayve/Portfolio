import './style.scss';
import PropTypes from 'prop-types';

export default function Angles({href, classe, icon}) {
    return (
        <li>
            <a data-aos="fade-right" href={href} className={classe} rel="noreferrer" >
                {icon}
            </a>
        </li>
    );
}

Angles.defaultProps = {
    href: '/',
    classe: '',
    icon: ''
}

Angles.propTypes = {
    href: PropTypes.string,
    classe: PropTypes.string,
    icon: PropTypes.string
}
