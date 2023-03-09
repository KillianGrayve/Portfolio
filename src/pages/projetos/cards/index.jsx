import { PropTypes } from 'prop-types';
import './cards.scss';

export default function Card({ img, tittle, txt, link }) {
    return (
        <div className="card__project">
            <div className="card__project-content">
                <img src={img} alt="Aaa" className="card__project-img" />

                <div className="card__project__content-txt">
                    <h2 className="card__project__tittle">
                        <code>{tittle}</code>
                    </h2>
                    <p className="card__project__txt-first">{txt}</p>

                    <button type="button" className="btn btnCard">
                        <a className="btn__link" target="_blank" href={link} rel="noreferrer">
                            Ver site
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

Card.defaultProps = {
    img: 'Esqueceu da imagem',
    tittle: 'Esqueceu do titulo',
    txt: 'Esqueceu do Texto',
    link: null,
};

Card.propTypes = {
    img: PropTypes.string,
    tittle: PropTypes.string,
    txt: PropTypes.string,
    link: PropTypes.string,
};
