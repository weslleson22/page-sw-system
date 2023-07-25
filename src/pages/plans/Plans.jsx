import './plans.css'
import {plans} from "../../data";
import Header from "../../components/header/Header";
import HeaderImage from '../../images/Planos/0001-Idoso.jpg';
import Card from "../../UI/card/Card";
import React from 'react'
const Plans = () => {
    return (
        <>
            <Header title='Planos' image={HeaderImage}>
                Descubra nossos planos personalizados. Escolha o ideal para você. Alcance seus objetivos conosco.
            </Header>
            <section className='plans'>
                <div className='container plans__container'>
                    {
                        plans.map(({id, name, desc, price, features}) => {
                            return <Card key={id} className='plan'>
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h2>R$ </h2><h1>{`${price}`}</h1>
                                <h4>Características</h4>
                                {
                                    features.map(({feature, available}, index) => {
                                        return <p key={index} className={!available ? 'disabled' : ''}>
                                            {feature}
                                        </p>
                                    })
                                }
                                <button className='btn lg'>Escolha o Plano</button>
                            </Card>
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Plans;
