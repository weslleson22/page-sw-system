import './pprograms.css'
import {FaCrown} from "react-icons/fa";
import SectionHead from "../sectionHeader/SectionHead";
import {programs} from '../../data'
import Card from "../../UI/card/Card";
import {Link} from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import React from 'react'
const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead icon={<FaCrown/>} title='SERVIÇOS'/>
                <h3>Estamos profundamente comprometidos com o crescimento e o sucesso de nossos clientes.</h3>
                <div className='programs__wrapper'>
                    {
                        programs.map(({id, icon, title, info, path}) => {
                            return (
                                <Card className='programs__program' key={id}>
                                    <span>{icon}</span>
                                    <Link  to={path} className='btn sm'>Veja um pouco!<AiFillCaretRight/></Link>
                                    
                                    <h4>{title}</h4>
                                    
                                    <small>{info}</small>
                                   
                                    
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs;