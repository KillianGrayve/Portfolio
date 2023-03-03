// eslint-disable-next-line import/no-extraneous-dependencies
import Tilt from 'react-parallax-tilt';
import './_card.scss';

export default function slide(props) {
    return (
        <section className="slide">
            <div className="slide__content">
                <Tilt>
                    <div className="card">
                        <div className="card__content">
                            <div className="overlay" />
                            <div className="card__img-container">
                                <img src={props.img} alt={props.alt} className="card__img" />
                            </div>
                            <div className="card__txt-content">
                                <h2 className="card__txt-first">{props.txt__first}</h2>
                                <p className="card__txt-second">{props.txt__second}</p>
                                <h2 className="card__txt-third">{props.txt__third}</h2>
                                <p className="card__txt-fourth">{props.txt__fourth}</p>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    );
}
