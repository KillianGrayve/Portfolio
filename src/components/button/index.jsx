import PropTypes from 'prop-types';
import './button.scss';

export default function Button({ txt, icon, link, class2, fun }) {
    return (
        <button type="button" className={`btn ${class2}`}>
            <a className="link" href={link} onClick={fun} target="_blank" rel="noreferrer" download>
                {icon} {txt}
            </a>
        </button>
    );
}

Button.defaultProps = {
    txt: 'Insira um texto',
    icon: null,
    link: null,
    class2: '',
    fun: null,
};

Button.propTypes = {
    txt: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    class2: PropTypes.string,
    fun: PropTypes.string,
};
