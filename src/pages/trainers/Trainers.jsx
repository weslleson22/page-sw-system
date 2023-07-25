import './equipe.css';
import {trainers} from "../../data";
import Header from "../../components/header/Header";
import HeaderImage from '../../images/Equipe/logo-header.jpg';
import {BsInstagram} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF, FaLinkedin} from "react-icons/fa";
import Trainer from "./Trainer";
import React from 'react'
const Trainers = () => {
    return (
        <>
            <Header title='Equipe do Projeto' image={HeaderImage}>
            Seja bem-vindo à nossa empresa de desenvolvimento e suporte em tecnologia! Somos apaixonados por inovação e estamos aqui para transformar suas ideias em realidade. Nossa missão é oferecer soluções personalizadas e eficientes para impulsionar o crescimento do seu negócio. Conte conosco para uma jornada de sucesso em direção à transformação digital.
            </Header>
            <section className='trainers'>
                <div className='container trainers__container'>
                    {
                        trainers.map(({id, image, name, jop, socials}) => {
                            return <Trainer key={id} image={image} jop={jop} socials={
                                [
                                    {icon: <BsInstagram/>, link: socials[0]},
                                    {icon: <AiOutlineTwitter/>, link: socials[1]},
                                    {icon: <FaFacebookF/>, link: socials[2]},
                                    {icon: <FaLinkedin/>, link: socials[3]},
                                ]}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Trainers;
