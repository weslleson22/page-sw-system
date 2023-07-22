import './vvalues.css';
import Image from '../../images/Sobre/02-missao.jpg';

import SectionHead from "../sectionHeader/SectionHead";
import {GiCutDiamond} from "react-icons/gi";
import {values} from "../../data";
import Card from "../../UI/card/Card";
import React from 'react'
const Values = () => {
    return (
        <section className='values'>
            <div className='container values__container'>
                <div className='values__left'>
                    <div className='values__image'>
                        <img src={Image} alt='values'/>
                       
                    </div>
                </div>
                <div className='values__right'>
                    <SectionHead icon={<GiCutDiamond/>} title='Valores'/>
                    <p>Agora, vamos conhecer os quatro valores que são frequentemente destacados pelas nossa empresa de tecnologia para atingir nossos objetivos e manter uma cultura organizacional positiva e inovadora.</p>
                    <div className='values__wrapper'>
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card className='values__value' key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Values;