import PropTypes from 'prop-types';
import './style.scss';

export default function Button({ txt, icon, href, class2, fun }) {
    return (
        <button type="button" className={`btn ${class2}`}>
            <a className="link" href={href} onClick={fun} target="_blank" rel="noreferrer" download>
                {icon} {txt}
            </a>
        </button>
    );
}

Button.defaultProps = {
    txt: 'Insira um texto',
    icon: null,
    href: null,
    class2: '',
    fun: null,
};

Button.propTypes = {
    txt: PropTypes.string,
    icon: PropTypes.string,
    href: PropTypes.string,
    class2: PropTypes.string,
    fun: PropTypes.string,
};
