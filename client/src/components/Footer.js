import React from 'react';




const Footer = () => {

    const footerInfo = [
        {
            href: 'https://discord.gg/XWqhummP',
            src: 'fa fa-discord fa-2x'
        },
        {
            href: 'https://m.facebook.com/groups/990973958249372/',
            src: 'fa fa-facebook-square fa-2x'
        },
        {
            href: 'https://www.instagram.com/invites/contact/?i=1koqnycqze8mc&utm_content=ouh00jk',
            src: 'fa fa-instagram fa-2x'
        },
        {
            href: 'https://linktr.ee/dubcityvrtournaments',
            src: 'fa fa-tree fa-2x'
        },
        {
            href: 'https://www.twitch.tv/dubcityvrtournament',
            src: 'fa fa-twitch fa-2x'
        }
    ]

    return (
        <footer className='d-flex align-items-end'>
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