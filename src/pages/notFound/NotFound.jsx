import './01_erro_volta.css';
import {Link} from "react-router-dom";
import React from 'react'
const NotFound = () => {
    return (
        <section>
            <div className='container notfound__container'>
                <h2>Page Not Found</h2>
                <Link to='/' className='btn'>Volta para o Inicio</Link>
            </div>
        </section>
    )
}
export default NotFound;
