import { AiOutlineCloudDownload } from 'react-icons/ai';
import { RiGithubFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';
import Button from '../../../components/button';
import IconList from './iconList';
import './style.scss';

export default function Social() {
    const list = [
        { link: '/', classe: 'linkedin', icon: <RiLinkedinFill /> },
        { link: '/', classe: 'git', icon: <RiGithubFill /> },
        { link: '/', classe: 'whatsapp', icon: <RiWhatsappFill /> },
    ];

    return (
        <div>
            <ul className="social ">
                {list.map((item) => (
                    <IconList link={item.link} classe={item.classe} icon={item.icon} />
                ))}
            </ul>

            <div className="btn__container">
                <Button icon={<AiOutlineCloudDownload className="btnIcon" />} txt="Currículo" />
            </div>
        </div>
    );
}
