import { RxViewHorizontal, RxViewVertical } from 'react-icons/rx';
import { Typewriter } from 'react-simple-typewriter';
import '../../components/variables/_variables.scss';
import Socials from './socials';
import Angles from './socials/angles';
import './style.scss';

export default function Home() {
    const list = [
        { href: '/', classe: 'angles', icon: <RxViewHorizontal /> },
        { href: '/', classe: 'angles', icon: <RxViewVertical /> },
    ];

    return (
        <section>
            <ul className="angles__list">
                {list.map((e) => (
                    <Angles href={e.href} classe={e.classe} icon={e.icon} />
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
                        Bastante motivado a aprender e aperfeiçoar minhas<br /> habilidades. Em busca do primeiro emprego na area!
                    </p>
                    <Socials />
                </div>

                <div data-aos="fade-left" className="presentation__image">
                    <img src="./img/geral/React_fuchsia.png" alt="Imagem giratória React" />
                </div>
                
            </div>
        </section>
    );
}
