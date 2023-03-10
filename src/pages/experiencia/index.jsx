/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import 'aos/dist/aos.css';
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import Footer from '../../components/footer';
import Card from './card';
import './experiencia.scss';

export default function Experiencia() {
    return (
        <section className="experiencia__container">
            <h2 data-aos="fade-up" className="titulo__first">
                <code>Experiência em Programação</code>
            </h2>
            <div data-aos="fade-up">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={2}
                    // eslint-disable-next-line react/jsx-curly-brace-presence
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    loop
                    pagination
                    coverflowEffect={{
                        rotate: 0,
                        strech: 0,
                        dephth: 0,
                        modifier: 13.5,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 5000 }}
                >
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/JS.png"
                            alt="Imagem JavaScript"
                            txtFirst="JavaScript"
                            txtSecond={<span>Programando em JavaScript desde 2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/HTML.png"
                            alt="Imagem HTML"
                            txtFirst="HTML"
                            txtSecond={<span>Programando em HTML desde 2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/CSS.png"
                            alt="Imagem CSS"
                            txtFirst="CSS"
                            txtSecond={<span>Programando em CSS <br />desde 2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/Sass.png"
                            alt="Imagem Sass"
                            txtFirst="Sass"
                            txtSecond={<span>Programando em Sass desde 2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/Reactjs.png"
                            alt="Imagem React"
                            txtFirst="React"
                            txtSecond={<span>Programando em React desde 2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/Git.png"
                            alt="Imagem Git"
                            txtFirst="Git"
                            txtSecond={<span>Estudando Git desde <br />2023</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/GitHub.png"
                            alt="Imagem GitHub"
                            txtFirst="GitHub"
                            txtSecond={<span> Usando GitHub desde <br />2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/VsCode.png"
                            alt="Imagem Visual Studio Code"
                            txtFirst="VsCode"
                            txtSecond={<span>Programando no VsCode desde 2022</span>}
                            txtThird="Cursos"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </span>
                            }
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Titulo  */}
                <h2 data-aos="fade-up" className="titulo__second">
                    <code>Experiência profissional</code>
                </h2>

                {/* Experiência profissional */}
                <Swiper
                    data-aos="fade-up"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={2}
                    // eslint-disable-next-line react/jsx-curly-brace-presence
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    loop
                    pagination
                    coverflowEffect={{
                        rotate: 0,
                        strech: 0,
                        dephth: 0,
                        modifier: 12,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 4500 }}
                >
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/PacPizzaMan.png"
                            alt="Imagem Buffet PizzAmor"
                            txtFirst="PizzaAmor"
                            txtSecond={
                                <span>
                                    Atuei como garçom por 5 anos
                                    <br /> 2014 - 2019
                                </span>
                            }
                            txtThird="Afazeres"
                            txtFourth={
                                <span>
                                    Servir os clientes com bebidas, pizzas e
                                    doces. Limpeza pós festa e na ajuda de guardar os itens utilizados no evento.
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/Habibs.png"
                            alt="Imagem Habib's"
                            txtFirst="Habib's"
                            txtSecond={<span>Atuei no Habibs como garçom por 4 meses</span>}
                            txtThird="Afazeres"
                            txtFourth={
                                <span>
                                    Servir os clientes com tudo (Bebidas, etc).
                                    Limpeza no salão. Abrir e fechar pedidos, também as vezes atuando como
                                    o caixa.{' '}
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/ReactHeart.png"
                            alt="Imagem React com coração"
                            txtFirst="React Project"
                            txtSecond={<span>Profissionalmente eu não fiz nada em React, mas...</span>}
                            txtThird="Nota"
                            txtFourth={
                                <span>
                                    Eu adoraria começar a programar nessa Framework que tanto amo!
                                    Sempre procuro estudar e saber mais.
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/Freelancer.png"
                            alt="Imagem Freelancer"
                            txtFirst="Freelancer"
                            txtSecond={
                                <span>Atuei como freelancer desde 2022.</span>
                            }
                            txtThird="Afazeres"
                            txtFourth={
                                <span>
                                    Fazendo Chatbox, Goal, Eventlist para stream usando HTML, CSS e
                                    JS. Editando vídeos e imagens (Thumbs+).
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img=".\img\experiencia_profissional\Future.png"
                            alt="Imagem Relógio feito de seta"
                            txtFirst="Futuro"
                            txtSecond={
                                <span>
                                    Futuramente terei mais experiência profissional aqui!
                                </span>
                            }
                            txtThird="Aviso!"
                            txtFourth={
                                <span>
                                    Quem sabe a sua empresa seja o meu próximo card 👀 <br />
                                    <br />
                                    (Assim espero)
                                </span>
                            }
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Titulo  */}
                <h2 data-aos="fade-up" className="titulo__third">
                    <code>Experiência Geral</code>
                </h2>

                {/* Experiência profissional */}
                <Swiper
                    data-aos="fade-up"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={2}
                    // eslint-disable-next-line react/jsx-curly-brace-presence
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    loop
                    pagination
                    coverflowEffect={{
                        rotate: 0,
                        strech: 0,
                        dephth: 0,
                        modifier: 12,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide>
                        <Card
                            img=".\img\experiencia_geral\AdobrePremiere.png"
                            alt="Imagem Adobre Premiere"
                            txtFirst="Premiere"
                            txtSecond={<span>Editando vídeo com o premiere desde 2022</span>}
                            txtThird="Curso"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_geral/AfterEffects.png"
                            alt="Imagem After Effects"
                            txtFirst="After Effects"
                            txtSecond={<span>Editando vídeos com After Effects desde 2022</span>}
                            txtThird="Curso"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img=".\img\experiencia_geral\Photoshop.png"
                            alt="Imagem Photoshop"
                            txtFirst="Photoshop"
                            txtSecond={<span>Editando imagens usando Photoshop desde 2022</span>}
                            txtThird="Curso"
                            txtFourth={
                                <span>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_geral/Word.png"
                            alt="Imagem Word_Microsoft"
                            txtFirst="Word"
                            txtSecond={<span>Fazendo trabalhos no word desde 2018</span>}
                            txtThird="Curso"
                            txtFourth={
                                <span>
                                    YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </span>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_geral/Excel.png"
                            alt="Imagem Excel Microsoft"
                            txtFirst="Excel"
                            txtSecond={<span>Estudando excel desde o inicio de 2023.</span>}
                            txtThird="Curso"
                            txtFourth={
                                <span>
                                    YouTube
                                    <br />
                                    <br />
                                    (Experiência baixa)
                                </span>
                            }
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </section>
    );
}
