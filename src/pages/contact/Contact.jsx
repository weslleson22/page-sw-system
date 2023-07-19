import './Contact.css';
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
                Lorem ipsum dolor sit amet, consecrate radicalising elite.
                Aliquot exception similitude eis option Doldrums, query.
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
                        <Link to="https://wa.me/+559894971547" target='_blank' rel='noreferrer'>
                            <IoLogoWhatsapp/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;