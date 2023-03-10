import { AiOutlineCloudDownload } from 'react-icons/ai';
import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';
import Button from '../../../components/button';
import './angles.scss';
import IconList from './iconList';

export default function Social() {
    const listIcons = [
        {
            id: 1,
            link: 'https://www.linkedin.com/in/eric-lideme-515417245/',
            classe: 'linkedin',
            icon: <RiLinkedinFill />,
        },
        { id: 2, link: 'https://github.com/EricLideme', classe: 'git', icon: <RiGithubFill /> },
        { id: 3, link: 'https://wa.me/11973458936', classe: 'whatsapp', icon: <RiWhatsappFill /> },
    ];

    return (
        <div>
            <ul className="social ">
                {listIcons.map((e) => (
                    <IconList key={e.id} href={e.link} classe={e.classe} icon={e.icon} />
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
