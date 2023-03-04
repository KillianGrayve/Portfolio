/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Card from './card';
import './_projetos.scss';

export default function Projetos() {
    const [img, setImg] = useState({
        pag1: './img/geral/GeadorDeCancelamento.jpeg',
        pag2: './img/geral/GeadorDeCancelamento.jpeg',
        pag3: './img/geral/GeadorDeCancelamento.jpeg',
        pag4: './img/geral/GeadorDeCancelamento.jpeg',
        pag6: './img/geral/GeadorDeCancelamento.jpeg',
        pag5: './img/geral/GeadorDeCancelamento.jpeg',
    });

    return (
        <section className="projetos">
            <div className="list__container">
                <ul className="projetos__list">
                    <li>
                        <p
                            onClick={() => {
                                setImg({
                                    pag1: './img/geral/GeadorDeCancelamento.jpeg',
                                    pag2: './img/geral/GeadorDeCancelamento.jpeg',
                                    pag3: './img/geral/GeadorDeCancelamento.jpeg',
                                    pag4: './img/geral/GeadorDeCancelamento.jpeg',
                                    pag6: './img/geral/GeadorDeCancelamento.jpeg',
                                    pag5: './img/geral/GeadorDeCancelamento.jpeg',
                                });
                            }}
                            className="links links__first"
                        >
                            {' '}
                            pagina 1{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => {
                                setImg({
                                    pag1: './img/experiencia_programacao/Git.png',
                                    pag2: './img/experiencia_programacao/Git.png',
                                    pag3: './img/experiencia_programacao/Git.png',
                                    pag4: './img/experiencia_programacao/Git.png',
                                    pag6: './img/experiencia_programacao/Git.png',
                                    pag5: './img/experiencia_programacao/Git.png',
                                });
                            }}
                            className="links links__second"
                        >
                            {' '}
                            pagina 2{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => {
                                setImg({
                                    pag1: './img/experiencia_programacao/Reactjs.png',
                                    pag2: './img/experiencia_programacao/Reactjs.png',
                                    pag3: './img/experiencia_programacao/Reactjs.png',
                                    pag4: './img/experiencia_programacao/Reactjs.png',
                                    pag5: './img/experiencia_programacao/Reactjs.png',
                                    pag6: './img/experiencia_programacao/Reactjs.png',
                                });
                            }}
                            className="links links__third"
                        >
                            {' '}
                            Pagina 3{' '}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="cards__container">
                <div className="cards__content">
                    {/* 1 */}
                    <Card
                        className="card__first"
                        img={img.pag1}
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    {/* 2 */}
                    <Card
                        img={img.pag2}
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    {/* 3 */}
                    <Card
                        img={img.pag3}
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    {/* 4 */}
                    <Card
                        img={img.pag4}
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    {/* 5 */}
                    <Card
                        img={img.pag5}
                        tittle="Gerador de cancelamento"
                        txt={
                            <p>
                                Bote seu nome e seu sexo e descubra de que jeito você será
                                cancelado.
                            </p>
                        }
                    />
                    {/* 6 */}
                    <Card
                        img={img.pag6}
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
