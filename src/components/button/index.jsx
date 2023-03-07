import PropTypes from 'prop-types';
import './style.scss';

export default function Button({ txt, icon, href, class2 }) {
    return (
        <button type="button" className={`btn ${class2}`}>
            <a className='link' href={href}>
                {icon} {txt}
            </a>
        </button>
    );
}

Button.defaultProps = {
    txt: 'Insira um texto',
    icon: '',
    href: '',
    class2: '',
};

Button.propTypes = {
    txt: PropTypes.string,
    icon: PropTypes.string,
    href: PropTypes.string,
    class2: PropTypes.string,
};
