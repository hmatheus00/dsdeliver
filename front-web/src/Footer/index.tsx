import React from 'react';
import './styles.css';

import { ReactComponent as Linkedin } from './img-linkedin.svg';
import { ReactComponent as Youtube } from './img-youtube.svg';
import { ReactComponent as Instagran } from './img-instagran.svg';

function Footer() {
    return (
        <footer className='main-footer'>
            App desenvolvido durante a 2ª ed. do evento <b>Semana DevSuperior</b>
            <div className="footer-icons">
                <a href="youtube" target="_new"> <Linkedin /> </a>
                <a href="linkedin" target="_new"> <Youtube /> </a>
                <a href="instagran" target="_new"> <Instagran /></a>
            </div>
        </footer>
    )
}

export default Footer;