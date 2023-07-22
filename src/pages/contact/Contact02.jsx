import './contact.css';
import {Link} from "react-router-dom";
import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import React from 'react'
const Contact02 = () => {
    return (
        <>
 
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

export default Contact02;