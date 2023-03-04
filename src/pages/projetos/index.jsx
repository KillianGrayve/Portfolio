import Card from './card';
import './_projetos.scss';

export default function Projetos() {
    return (
        <section className="projetos">
            <div className="list__container">
                <ul className="projetos__list">
                    <li>
                        <p className="links links__first"> Pagina 1 </p>
                    </li>
                    <li>
                        <p className="links links__second"> Pagina 2 </p>
                    </li>
                    <li>
                        <p className="links links__third"> Pagina 3 </p>
                    </li>
                </ul>
            </div>
            <div className="cards__container">
                <div className="cards__content">
                    <Card
                        img="./img/geral/GeadorDeCancelamento.jpeg"
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    <Card
                        img="./img/geral/GeadorDeCancelamento.jpeg"
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    <Card
                        img="./img/geral/GeadorDeCancelamento.jpeg"
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    <Card
                        img="./img/geral/GeadorDeCancelamento.jpeg"
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    <Card
                        img="./img/geral/GeadorDeCancelamento.jpeg"
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    <Card
                        img="./img/geral/GeadorDeCancelamento.jpeg"
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
