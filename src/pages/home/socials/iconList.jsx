import PropTypes from 'prop-types';

export default function IconList({ classe, icon, href }) {
    return (
        <li>
            <a href={href} target="_blank" className={classe} rel="noreferrer">
                {icon}
            </a>
            {/* <RiLinkedinFill /> */}
        </li>
    );
}

IconList.defaultProps = {
    classe: '',
    icon: '',
    href: '/',
};

IconList.propTypes = {
    classe: PropTypes.string,
    icon: PropTypes.node,
    href: PropTypes.string,
};
