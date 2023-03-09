import PropTypes, { node } from 'prop-types';
import Tilt from 'react-parallax-tilt';
import './card.scss';

export default function Slide({ img, alt, txtFirst, txtSecond, txtThird, txtFourth }) {


    return (
        <section className="slide">
            <div className="slide__content">
                <Tilt>
                    <div className="card">
                        <div className="card__content">
                            <div className="overlay" />
                            <div className="card__img-container">
                                <img src={img} alt={alt} className="card__img" />
                            </div>
                            <div className="card__txt-content">
                                <h2 className="card__txt-first">{txtFirst}</h2>
                                <span className="card__txt-second">{txtSecond}</span>
                                <h2 className="card__txt-third">{txtThird}</h2>
                                <span className="card__txt-fourth">{txtFourth}</span>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    );
}

Slide.defaultProps = {
    img: '',
    alt: '',
    txtFirst: '',
    txtSecond: '',
    txtThird: '',
    txtFourth: '',
};

Slide.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    txtFirst: PropTypes.string,
    txtSecond: PropTypes.string && node,
    txtThird: PropTypes.string && node,
    txtFourth: PropTypes.string && node,
};
