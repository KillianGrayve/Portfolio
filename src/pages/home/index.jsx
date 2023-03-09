/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { RxViewHorizontal, RxViewVertical } from 'react-icons/rx';
import { Typewriter } from 'react-simple-typewriter';
import NavList from '../../components/props/navList/index';
import '../../components/variables/_variables.scss';
import Socials from './socials';
import './socials.scss';

export default function Home() {
    const list = [
        { onde: '/home', title: 'Modo Horizontal', txt: <RxViewHorizontal /> },
        { onde: '/homev', title: 'Modo Vertical', txt: <RxViewVertical /> },
    ];

    return (
        <section>
            <ul className="angles__list">
                {list.map((e) => (
                    <NavList key={e} onde={e.onde} classe='angles' txt={e.txt} title={e.title} />
                ))}
            </ul>
            <div className="presentation">
                <div data-aos="fade-right" className="presentation__txt">
                    <p className="presentation__one ">Olá, eu me chamo</p>
                    <p className="presentation__two">Eric Lideme</p>
                    <p className="presentation__three">
                        E eu sou
                        <code>
                            <Typewriter
                                words={[
                                    ' Designer',
                                    ' Vídeo editor',
                                    ' Freelancer',
                                    ' Front-end developer',
                                ]}
                                loop={Infinity}
                                typeSpeed={90}
                                deleteSpeed={90}
                                delaySpeed={100}
                                cursor
                                cursorStyle="_"
                            />
                        </code>
                    </p>
                    <p className="presentation__four">
                        Bastante motivado a aprender e aperfeiçoar minhas
                        <br /> habilidades. Em busca do primeiro emprego na area<br />da programação!
                    </p>
                    <Socials />
                </div>

                <div data-aos="fade-left" className="presentation__image">
                    <img
                        className="presentation__image-react"
                        src="./img/geral/React_fuchsia.png"
                        alt="Imagem giratória React"
                    />
                </div>
            </div>
        </section>
    );
}
