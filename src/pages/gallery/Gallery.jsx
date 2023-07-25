import './gallery.css';
import Header from "../../components/header/Header";
import HeaderImage from '../../images/header_bg_3.jpg';
import React from 'react'
const Gallery = () => {
    const galleryLength = 4;
    const images = [];
    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/figuras/gallery${i}.jpg`));
    }
    return (
        <>
            <Header title='Our Gallery' image={HeaderImage}>
                Alguns trabalhos
            </Header>
            <section className='gallery'>
                <div className='container gallery__container'>
                    {
                        images.map((image, index) => {
                            return <article key={index}>
                                <img src={image} alt={`Gallery Image ${index + 1}`}/>
                            </article>
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Gallery;