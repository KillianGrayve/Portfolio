/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Footer from '../../components/footer';
import Card from './card';
import './style.scss';

export default function Projetos() {

    const [img, setImg] = useState({
        site1: './img/geral/GeadorDeCancelamento.jpeg',
        site2: './img/geral/GeadorDeCancelamento.jpeg',
        site3: './img/geral/GeadorDeCancelamento.jpeg',
        site4: './img/geral/GeadorDeCancelamento.jpeg',
        site5: './img/geral/GeadorDeCancelamento.jpeg',
        site6: './img/geral/GeadorDeCancelamento.jpeg',
    });
    const [tittle, setTittle] = useState({
        site1: 'Future',
        site2: 'Future',
        site3: 'Future',
        site4: 'Future',
        site5: 'Future',
        site6: 'Future',
    });
    const [desc, setDesc] = useState({
        site1: 'Bote seu nome e seu sexo e descubra de que jeito você será cancelado.',
        site2: 'Future',
        site3: 'Future',
        site4: 'Future',
        site5: 'Future',
        site6: 'Future',
    });

    return (
        <section className="projetos">
            <div className="list__container">
                <ul className="projetos__list">
                    <li>
                        <p
                            onClick={() => {
                                setImg({
                                    site1: './img/geral/GeadorDeCancelamento.jpeg',
                                    site2: './img/geral/GeadorDeCancelamento.jpeg',
                                    site3: './img/geral/GeadorDeCancelamento.jpeg',
                                    site4: './img/geral/GeadorDeCancelamento.jpeg',
                                    site5: './img/geral/GeadorDeCancelamento.jpeg',
                                    site6: './img/geral/GeadorDeCancelamento.jpeg',
                                });
                                setTittle({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                    site5: 'Future',
                                    site6: 'Future',
                                });
                                setDesc({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                    site5: 'Future',
                                    site6: 'Future',
                                });
                            }}
                            className="links links__first"
                        >
                            {' '}
                            Pagina 1{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => {
                                setImg({
                                    site1: './img/experiencia_programacao/Git.png',
                                    site2: './img/experiencia_programacao/Git.png',
                                    site3: './img/experiencia_programacao/Git.png',
                                    site4: './img/experiencia_programacao/Git.png',
                                    site5: './img/experiencia_programacao/Git.png',
                                    site6: './img/experiencia_programacao/Git.png',
                                });
                                setTittle({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                    site5: 'Future',
                                    site6: 'Future',
                                });
                                setDesc({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                    site5: 'Future',
                                    site6: 'Future',
                                });
                            }}
                            className="links links__second"
                        >
                            {' '}
                            Pagina 2{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            onClick={() => {
                                setImg({
                                    site1: './img/experiencia_programacao/Reactjs.png',
                                    site2: './img/experiencia_programacao/Reactjs.png',
                                    site3: './img/experiencia_programacao/Reactjs.png',
                                    site4: './img/experiencia_programacao/Reactjs.png',
                                    site5: './img/experiencia_programacao/Reactjs.png',
                                    site6: './img/experiencia_programacao/Reactjs.png',
                                });
                                setTittle({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                    site5: 'Future',
                                    site6: 'Future',
                                });
                                setDesc({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                    site5: 'Future',
                                    site6: 'Future',
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
                    {/* Site 1 */}
                    <Card img={img.site1} tittle={tittle.site1} txt={<p>{desc.site1}</p>} />
                    {/* Site 2 */}
                    <Card img={img.site2} tittle={tittle.site2} txt={<p>{desc.site2}</p>} />
                    {/* Site 3 */}
                    <Card img={img.site3} tittle={tittle.site3} txt={<p>{desc.site3}</p>} />
                    {/* Site 4 */}
                    <Card img={img.site4} tittle={tittle.site4} txt={<p>{desc.site4}</p>} />
                    {/* Site 5 */}
                    <Card img={img.site5} tittle={tittle.site5} txt={<p>{desc.site5}</p>} />
                    {/* Site 6 */}
                    <Card img={img.site6} tittle={tittle.site6} txt={<p>{desc.site6}</p>} />
                </div>
            </div>
            <Footer />
        </section>
    );
}
