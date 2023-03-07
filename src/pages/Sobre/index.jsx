import { HiOutlineMail } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';
import Button from '../../components/Button';
import './styleModal.scss';
import './styleSobre.scss';

export default function SobreContainer() {
    const modal = document.querySelector('dialog');

    // Copiar Email
    const copiar = () => {
        const email = 'Ericlideme.p@hotmail.com';
        navigator.clipboard.writeText(email);

        // Mostrar modal
        modal.showModal();
    };

    // Fechar modal
    const modalClose = () => {
        modal.close();
    };

    return (
        <section className="sobre">
            <div data-aos="fade-right" className="box">
                <div className="content">
                    <h2 className="content__txt-first">Eric Lideme</h2>
                    <h2 className="content__txt-second"> 19 anos</h2>
                    <h2 className="content__txt-third"> 12/10/2003</h2>
                    <img className="content__img" src="./img/geral/foto.jpg" alt="Foto do Eric" />
                </div>
            </div>
            <div className="sobre__txt">
                <div data-aos="fade-left">
                    <h1 className="sobre__txt-first">
                        Sobre <code>mim</code>
                    </h1>
                    <h2 className="sobre__txt-second">São paulo, Capital</h2>
                    <p className="sobre__txt-third">
                        Bastante interessado em aprender coisas novas
                        <br /> e assim desenvolver minhas habilidades. Confiante
                        <br /> na minha capacidade de aprendizado e precisão no
                        <br /> que me foi ensinado. Bem organizado e sempre
                        <br /> prezando por um ambiente limpo agradável para se trabalhar.
                    </p>
                </div>

                <div data-aos="fade-zoom" data-aos-delay="700" className='btn__container'>
                    <MdContentCopy className="copy" onClick={copiar} />

                    <Button icon={<HiOutlineMail />} txt="Email" href='mailto:Ericlideme.p@hotmail.com'/>
                </div>

                <dialog>
                    <h1 className="dialog__txt-first">Email Copiado!</h1>
                    <p className="dialog__txt-second">
                        Email: <code>Ericlideme.p@hotmail.com</code>
                    </p>
                    <button onClick={modalClose} className="btnModal" type="button">
                        Ok
                    </button>
                </dialog>
            </div>
        </section>
    );
}
