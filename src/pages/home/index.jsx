import * as React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../../components/variables/_variables.scss';
import Socials from './socials';
import './style.scss';

export default function Home() {
    return (
        <section className="presentation">
            <div className="presentation__txt">
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
                    Bastante motivado a aprender e aperfeiçoar minhas <br />
                    habilidades. Em busca do primeiro emprego na area!
                </p>
                <Socials />
            </div>
            <div className="presentation__image">
                <img src="./img/geral/React_fuchsia.png" alt="Imagem giratória React" />
            </div>
        </section>
    );
}
