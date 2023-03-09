import { AiOutlineCloudDownload } from 'react-icons/ai';
import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';
import Button from '../../../components/button';
import './angles.scss';
import IconList from './iconList';

export default function Social() {
    const list = [
        {
            link: 'https://www.linkedin.com/in/eric-lideme-515417245/',
            classe: 'linkedin',
            icon: <RiLinkedinFill />,
        },
        { link: 'https://github.com/EricLideme', classe: 'git', icon: <RiGithubFill /> },
        { link: 'https://wa.me/11973458936', classe: 'whatsapp', icon: <RiWhatsappFill /> },
    ];

    return (
        <div>
            <ul className="social ">
                {list.map((item) => (
                    <IconList href={item.link} classe={item.classe} icon={item.icon} />
                ))}
            </ul>

            <div className="btn__container">
                <Button
                    link="./assets/Curriculo_EricLideme.pdf"
                    icon={<AiOutlineCloudDownload className="btnIcon" />}
                    txt="Currículo"
                />
            </div>
        </div>
    );
}
