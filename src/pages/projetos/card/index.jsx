/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './_card-projetos.scss';

export default function Card(props) {

    return (
        <section>
            <div className="card__project">
                <div className="card__project-content">
                    <img src={props.img} alt="Aaa" className="card__project-img" />

                    <div className="card__project__content-txt">
                        <h2 className="card__project__tittle">
                            <code>{props.tittle}</code>
                        </h2>
                        <p className="card__project__txt-first">{props.txt}</p>

                        <button className="btnCard" type="button">
                            {' '}
                            Ver site
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
