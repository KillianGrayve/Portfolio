import { PropTypes } from 'prop-types';
import Button from '../../../components/button';
import './style.scss';

export default function Card({ img, tittle, txt }) {
    return (
        <section>
            <div className="card__project">
                <div className="card__project-content">
                    <img src={img} alt="Aaa" className="card__project-img" />

                    <div className="card__project__content-txt">
                        <h2 className="card__project__tittle">
                            <code>{tittle}</code>
                        </h2>
                        <p className="card__project__txt-first">{txt}</p>

                        <Button txt="Ver site" class2='btnCard'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

Card.defaultProps = {
    img: 'Esqueceu da imagem',
    tittle: 'Esqueceu do titulo',
    txt: 'Esqueceu do Texto',
};

Card.propTypes = {
    img: PropTypes.string,
    tittle: PropTypes.string,
    txt: PropTypes.string,
};
