import React from 'react';
import discord from '../assets/footer-icon/discord.png';
import facebook from '../assets/footer-icon/facebook.png';
import instagram from '../assets/footer-icon/instagram.png';
import linktree from '../assets/footer-icon/linktree.png';

const Footer = () => {

    const footerInfo = [
        {
            href: 'https://discord.gg/XWqhummP',
            src: discord
        },
        {
            href: 'https://m.facebook.com/groups/990973958249372/',
            src: 'fa fa-facebook-square'
        },
        {
            href: 'https://www.instagram.com/invites/contact/?i=1koqnycqze8mc&utm_content=ouh00jk',
            src: instagram
        },
        {
            href: 'https://linktr.ee/dubcityvrtournaments',
            src: linktree
        },
        // {
        //     href: 'https://www.twitch.tv/dubcityvrtournament',
        //     src: twitch
        // }
    ]

    return (
        <footer className='d-flex justify-content-center'>
            {footerInfo.map((fields, index) => {
                return (
                    <a key={index} href={fields.href}>
                        <i className={fields.src}></i>
                    </a>
                )
            })}
        </footer>
    )
}

export default Footer;