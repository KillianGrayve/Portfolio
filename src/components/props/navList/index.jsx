import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavList({ onde, classe, txt, title }) {
    return (
        <li>
            <NavLink
                to={onde}
                title={title}
                className={classe}
                style={(isActive) => (isActive ? undefined : undefined)}
            >
                {txt}
            </NavLink>
        </li>
    );
}

NavList.defaultProps = {
    onde: '',
    classe: '',
    txt: '',
    title: '',
};

NavList.propTypes = {
    onde: PropTypes.string,
    classe: PropTypes.string,
    txt: PropTypes.string,
    title: PropTypes.string,
};
