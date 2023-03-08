/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState } from 'react';
import Card from './cards';
import './style.scss';

export default function Projetos() {
    const pag1 = useRef();
    const pag2 = useRef();
    const pag3 = useRef();

    const removeActive = () => {
        pag1.current.classList.remove('active');
        pag2.current.classList.remove('active');
        pag3.current.classList.remove('active');
    };

    const active = (pag) => {
        removeActive();
        pag.current.classList.add('active');
    };

    const [img, setImg] = useState({
        site1: './img/geral/GeadorDeCancelamento.jpeg',
        site2: './img/geral/GeadorDeCancelamento.jpeg',
        site3: './img/geral/GeadorDeCancelamento.jpeg',
        site4: './img/geral/GeadorDeCancelamento.jpeg',
    });
    const [tittle, setTittle] = useState({
        site1: 'Gerador de cancelamento',
        site2: 'Future',
        site3: 'Future',
        site4: 'Future',
    });
    const [desc, setDesc] = useState({
        site1: 'Bote seu nome e seu sexo e descubra de que jeito você será cancelado.',
        site2: 'Future',
        site3: 'Future',
        site4: 'Future',
    });

    return (
        <section className="projetos">
            <div className="list__container">
                <ul className="projetos__list">
                    <li>
                        <p
                            ref={pag1}
                            onClick={() => {
                                active(pag1);
                                setImg({
                                    site1: './img/geral/GeadorDeCancelamento.jpeg',
                                    site2: './img/geral/GeadorDeCancelamento.jpeg',
                                    site3: './img/geral/GeadorDeCancelamento.jpeg',
                                    site4: './img/geral/GeadorDeCancelamento.jpeg',
                                });
                                setTittle({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                });
                                setDesc({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                });
                            }}
                            className="links_pag links__first active"
                        >
                            {' '}
                            Pagina 1{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            ref={pag2}
                            className="links_pag links__second"
                            onClick={() => {
                                active(pag2);
                                setImg({
                                    site1: './img/experiencia_programacao/Git.png',
                                    site2: './img/experiencia_programacao/Git.png',
                                    site3: './img/experiencia_programacao/Git.png',
                                    site4: './img/experiencia_programacao/Git.png',
                                });
                                setTittle({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                });
                                setDesc({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                });
                            }}
                        >
                            {' '}
                            Pagina 2{' '}
                        </p>
                    </li>
                    <li>
                        <p
                            ref={pag3}
                            onClick={() => {
                                active(pag3);
                                setImg({
                                    site1: './img/experiencia_programacao/Reactjs.png',
                                    site2: './img/experiencia_programacao/Reactjs.png',
                                    site3: './img/experiencia_programacao/Reactjs.png',
                                    site4: './img/experiencia_programacao/Reactjs.png',
                                });
                                setTittle({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                });
                                setDesc({
                                    site1: 'Future',
                                    site2: 'Future',
                                    site3: 'Future',
                                    site4: 'Future',
                                });
                            }}
                            className="links_pag links__third"
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
                </div>
            </div>
        </section>
    );
}
