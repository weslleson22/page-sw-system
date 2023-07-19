import React from "react";
import './mmainHeader.css';
import {Link} from 'react-router-dom'
//import Image from '../../images/Home-img/logo.png';

const MainHeader = () => {
    return (
        <header className='main__header'>
            <div className='container main__header-container'>
                <div className='main__header-left'>
                    <h4>#MeAlzhmer</h4>
                    <h1>Veja um pouco do nosso projeto</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consecrate radicalising elite. Aliquot
                        exception similitude eis option Doldrums, query.
                    </p>
                    <Link to='/plans' className='btn lg'>Iniciar</Link>
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
