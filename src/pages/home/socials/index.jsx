import * as React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import IconList from './iconList';
import './style.scss';

export default function Social() {
    const list = [
        { link: '/', classe: 'linkedin', icon: <RiLinkedinFill /> },
        { link: '/', classe: 'git', icon: <RiGithubFill /> },
        { link: '/', classe: 'whatsapp', icon: <AiOutlineCloudDownload /> },
    ];

    return (
        <div className="social">
            <ul className="social__rede">
                {list.map((item) => (
                    <IconList link={item.link} classe={item.classe} icon={item.icon} />
                ))}
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
