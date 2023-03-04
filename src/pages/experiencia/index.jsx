/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
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
import './_experiencia.scss';

export default function Experiencia() {
    return (
        <section className="experiencia__container">
            <h2 className="titulo__first">
                <code>Experiência em Programação</code>
            </h2>
            <div>
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
                            txt__first="JavaScript"
                            txt__second={<p>Programando em JavaScript desde o meio de 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/HTML.png"
                            alt="Imagem HTML"
                            txt__first="HTML"
                            txt__second={<p>Programando em HTML desde o meio de 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/CSS.png"
                            alt="Imagem CSS"
                            txt__first="CSS"
                            txt__second={<p>Programando em CSS desde o meio de 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/Sass.png"
                            alt="Imagem Sass"
                            txt__first="Sass"
                            txt__second={<p>Programando em Sass desde o final de 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/Reactjs.png"
                            alt="Imagem React"
                            txt__first="React"
                            txt__second={<p>Programando em React desde o final de 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/Git.png"
                            alt="Imagem Git"
                            txt__first="Git"
                            txt__second={<p>Estudando Git desde o começo de 2023</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/GitHub.png"
                            alt="Imagem GitHub"
                            txt__first="GitHub"
                            txt__second={<p> Usando GitHub desde o inicio de 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_programacao/VsCode.png"
                            alt="Imagem VsCode"
                            txt__first="Visual Studio Code"
                            txt__second={<p>Programando no Visual Studio Code desde 2022</p>}
                            txt__third="Cursos"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Alta)
                                </p>
                            }
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Titulo  */}
                <h2 className="titulo__second">
                    <code>Experiência profissional</code>
                </h2>

                {/* Experiência profissional */}
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
                            txt__first="Buffet PizzaAmor"
                            txt__second={
                                <p>
                                    Atuei como garçom por 5 anos
                                    <br /> 2014 - 2019
                                </p>
                            }
                            txt__third="Afazeres"
                            txt__fourth={
                                <p>
                                    Servir os clientes(Alta e baixa renda) com bebidas, pizzas e
                                    doces. Limpeza pós festa e na ajuda de guardar os itens
                                    utilizados no evento.
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/Habibs.png"
                            alt="Imagem Habib's"
                            txt__first="Habib's"
                            txt__second={<p>Atuei no Habibs como garçom por 4 meses</p>}
                            txt__third="Afazeres"
                            txt__fourth={
                                <p>
                                    Servir os clientes(Alta e baixa renda) com tudo(Bebida etc).
                                    Limpeza no salão. Abrir e fechar pedidos e as vezes atuando como
                                    o caixa.{' '}
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/ReactHeart.png"
                            alt="Imagem React"
                            txt__first="React project"
                            txt__second={<p>Profissionalmente eu não fiz nada em React mas...</p>}
                            txt__third="Nota"
                            txt__fourth={
                                <p>
                                    Eu adoraria começar a programar nessa Framework que tanto amo!
                                    Sempre procuro estudar e saber mais sobre pois programação me
                                    encanta.
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_profissional/Freelancer.png"
                            alt="Imagem Freelancer"
                            txt__first="Freelancer"
                            txt__second={
                                <p>Atuei como freelancer vendendo conteúdo online des de 2022.</p>
                            }
                            txt__third="Afazeres"
                            txt__fourth={
                                <p>
                                    Fazendo Chatbox, Goal, Eventlist para stream usando HTML, CSS e
                                    JS. Editando vídeo e editando imagens (Thumbs, Banners).
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img=".\img\experiencia_profissional\Future.png"
                            alt="Imagem Relógio feito de seta"
                            txt__first="Futuro"
                            txt__second={
                                <p>
                                    Futuramente terei mais experiência profissional para por aqui!
                                </p>
                            }
                            txt__third="Aviso!"
                            txt__fourth={
                                <p>
                                    Quem sabe a sua empresa seja o meu próximo card 👀 <br />
                                    <br />
                                    (Assim espero)
                                </p>
                            }
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Titulo  */}
                <h2 className="titulo__second">
                    <code>Experiência Geral</code>
                </h2>

                {/* Experiência profissional */}
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
                            alt="Imagem Buffet Adobre Premiere"
                            txt__first="Adobe Premiere"
                            txt__second={<p>Editando vídeo com o premiere desde 2022</p>}
                            txt__third="Curso"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência bem Alta)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_geral/AfterEffects.png"
                            alt="Imagem After Effects"
                            txt__first="After Effects"
                            txt__second={<p>Editando vídeos com After Effects desde 2022</p>}
                            txt__third="Curso"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência bem Alta)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img=".\img\experiencia_geral\Photoshop.png"
                            alt="Imagem Photoshop"
                            txt__first="Photoshop"
                            txt__second={<p>Editando imagens usando Photoshop desde 2022</p>}
                            txt__third="Curso"
                            txt__fourth={
                                <p>
                                    Alura / YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_geral/Word.png"
                            alt="Imagem Word_Microsoft"
                            txt__first="Word"
                            txt__second={<p>Fazendo trabalhos no word desde 2018</p>}
                            txt__third="Curso"
                            txt__fourth={
                                <p>
                                    YouTube
                                    <br />
                                    <br />
                                    (Experiência Média)
                                </p>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img="./img/experiencia_geral/Excel.png"
                            alt="Imagem Excel Microsoft"
                            txt__first="Excel"
                            txt__second={<p>Estudando excel desde o inicio de 2023.</p>}
                            txt__third="Curso"
                            txt__fourth={
                                <p>
                                    YouTube
                                    <br />
                                    <br />
                                    (Experiência bem baixa)
                                </p>
                            }
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </section>
    );
}
