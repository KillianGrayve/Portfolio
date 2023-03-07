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
import './style.scss';

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
                            txtSecond={<p>Programando em JavaScript desde o meio de 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="HTML"
                            txtSecond={<p>Programando em HTML desde o meio de 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="CSS"
                            txtSecond={<p>Programando em CSS desde o meio de 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="Sass"
                            txtSecond={<p>Programando em Sass desde o final de 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="React"
                            txtSecond={<p>Programando em React desde o final de 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="Git"
                            txtSecond={<p>Estudando Git desde o começo de 2023</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="GitHub"
                            txtSecond={<p> Usando GitHub desde o inicio de 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="Visual Studio Code"
                            txtSecond={<p>Programando no Visual Studio Code desde 2022</p>}
                            txtThird="Cursos"
                            txtFourth={
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
                            txtFirst="Buffet PizzaAmor"
                            txtSecond={
                                <p>
                                    Atuei como garçom por 5 anos
                                    <br /> 2014 - 2019
                                </p>
                            }
                            txtThird="Afazeres"
                            txtFourth={
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
                            txtFirst="Habib's"
                            txtSecond={<p>Atuei no Habibs como garçom por 4 meses</p>}
                            txtThird="Afazeres"
                            txtFourth={
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
                            txtFirst="React project"
                            txtSecond={<p>Profissionalmente eu não fiz nada em React mas...</p>}
                            txtThird="Nota"
                            txtFourth={
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
                            txtFirst="Freelancer"
                            txtSecond={
                                <p>Atuei como freelancer vendendo conteúdo online des de 2022.</p>
                            }
                            txtThird="Afazeres"
                            txtFourth={
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
                            txtFirst="Futuro"
                            txtSecond={
                                <p>
                                    Futuramente terei mais experiência profissional para por aqui!
                                </p>
                            }
                            txtThird="Aviso!"
                            txtFourth={
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
                <h2 data-aos="fade-up" className="titulo__second">
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
                            txtFirst="Adobe Premiere"
                            txtSecond={<p>Editando vídeo com o premiere desde 2022</p>}
                            txtThird="Curso"
                            txtFourth={
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
                            txtFirst="After Effects"
                            txtSecond={<p>Editando vídeos com After Effects desde 2022</p>}
                            txtThird="Curso"
                            txtFourth={
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
                            txtFirst="Photoshop"
                            txtSecond={<p>Editando imagens usando Photoshop desde 2022</p>}
                            txtThird="Curso"
                            txtFourth={
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
                            txtFirst="Word"
                            txtSecond={<p>Fazendo trabalhos no word desde 2018</p>}
                            txtThird="Curso"
                            txtFourth={
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
                            txtFirst="Excel"
                            txtSecond={<p>Estudando excel desde o inicio de 2023.</p>}
                            txtThird="Curso"
                            txtFourth={
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
