import { AiOutlineCloudDownload } from 'react-icons/ai';
import { RiGithubFill, RiLinkedinFill, RiWhatsappLine } from 'react-icons/ri';
import './_cv_social.scss';

export default function Social() {
    return (
        <div className="social">
            <ul className="social__rede">
                <li>
                    <a href="/" target="_blank" className="linkedin">
                        <RiLinkedinFill />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank" className="git">
                        <RiGithubFill />
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank" className="whatsapp">
                        <RiWhatsappLine />
                    </a>
                </li>
            </ul>
            <button type="button" className="btnCV">
                <cite>
                    <AiOutlineCloudDownload />
                </cite>{' '}
                Currículo
            </button>
        </div>
    );
}
