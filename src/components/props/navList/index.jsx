import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavList({ onde, classe, txt }) {
    return (
        <li>
            <NavLink
                to={onde}
                className={classe}
                style={(active) => (active ? undefined : undefined)}
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
};

NavList.propTypes = {
    onde: PropTypes.string,
    classe: PropTypes.string,
    txt: PropTypes.string,
};
