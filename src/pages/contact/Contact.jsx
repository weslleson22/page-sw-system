import './contact.css';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import HeaderImage from '../../images/Sobre/01-historia.jpg';
import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import React from 'react'
const Contact = () => {
    return (
        <>
            <Header title='Entra em contato' image={HeaderImage}>
                
Entre em contato conosco e descubra como podemos ajudá-lo(a). Estamos prontos para ouvir suas necessidades e oferecer soluções sob medida. Aguardamos ansiosamente o seu contato!
            </Header>
            <section className='contact'>
                <div className='container contact__container'>
                    <div className='contact__wrapper'>
                        <Link to="mailto:wesllesonsowza@gmail.com" target='_blank' rel='noreferrer'>
                            <MdEmail/>
                        </Link>
                        <Link to="https://m.me/ernest_achiver" target='_blank' rel='noreferrer'>
                            <BsMessenger/>
                        </Link>
                        <Link to="https://wa.me/+5598984971547" target='_blank' rel='noreferrer'>
                            <IoLogoWhatsapp/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;