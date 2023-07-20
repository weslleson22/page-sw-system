import React from "react";
import './mmainHeader.css';
import {Link} from 'react-router-dom'
import Image from '../../images/Home-img/logo.png';

const MainHeader = () => {
    return (
        <header className='main__header'>
            <div className='container main__header-container'>
                <div className='main__header-left'>
                    <h4>#MeAlzhmer</h4>
                    <h1>Soluções de software sob medida para suas necessidades comerciais exclusivas</h1>
                    <p>
                    Somos uma empresa apaixonada por tecnologia, composta por desenvolvedores altamente
                     qualificados e motivados. Nosso objetivo é entregar soluções de software excepcionais, que superem as expectativas dos nossos clientes.
                    </p>
                    <Link to='/plans' className='btn lg'>Saiba mais</Link>
                </div>
                <div className='main__header-right'>
                    <div className='main__header-circle'></div>
                    <div className='main__header-image'>
                        {/*<img src={Image} alt='Main Header'/>*/}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
