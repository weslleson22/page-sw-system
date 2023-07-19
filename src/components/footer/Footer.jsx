import './footer.css'
import {Link} from "react-router-dom";
import Logo from '../../images/logo-SW-1.png'
import {FaLinkedin, FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";
import React from 'react'
const Footer = () => {
    return (
        <footer>
            <div className='container footer__container'>
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='Footer Logo'/>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consecrate radicalising
                        elite. Aliquot exception similitude eis option Doldrums, query.
                    </p>
                    <div className='footer__socials'>
                        <Link to='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'>
                            <FaLinkedin/>
                        </Link>
                        <Link to='https://web.facebook.com/' target='_blank' rel='noreferrer noopener'>
                            <FaFacebookF/>
                        </Link>
                        <Link to='https://twitter.com/' target='_blank' rel='noreferrer noopener'>
                            <AiOutlineTwitter/>
                        </Link>
                        <Link to='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
                            <AiFillInstagram/>
                        </Link>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>Sobre</Link>
                    <Link to='/plans'>Planos</Link>
                    <Link to='/trainers'>Equipe</Link>
                    <Link to='/gallery'>Galeria</Link>
                    <Link to='/contact'>Contato</Link>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Estudos de Caso</Link>
                    <Link to='/s'>Eventos</Link>
                    <Link to='/s'>Comunidades parceiras</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Entra em Contato</h4>
                    <Link to='/contact'>Contate-nos</Link>
                    <Link to='/s'>Apoiar</Link>
                </article>
            </div>
            <div className='footer__copyright'>
                <small>2023 SW System &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;