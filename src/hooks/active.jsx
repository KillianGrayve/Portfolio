import PropTypes from 'prop-types';

export default function Active({ elementAdd }) {
    
    const active = (element) => {
        element.current.classList.add('active')
    }

    return <div>{active(elementAdd)}</div>;
}

Active.defaultProps = {
    elementAdd: '',
};

Active.propTypes = {
    elementAdd: PropTypes.string,
};
