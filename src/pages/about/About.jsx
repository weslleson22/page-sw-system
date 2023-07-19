import './About.css';
import Header from "../../components/header/Header";
import HeaderImage from '../../images/Sobre/00-capa.jpg'
import StoryImage from '../../images/Sobre/01-historia.jpg';
import VisionImage from '../../images/Sobre/03-visao.jpg';
import MissionImage from '../../images/Sobre/02-missao.jpg'
import React from 'react'

const About = () => {
    return (
        <>
            <Header title='Sobre' image={HeaderImage}>
                Lorem ipsum dolor sit amet, consecrate radicalising elite.
                Aliquot exception similitude eis option Doldrums, query.
            </Header>
            <section className='about__story'>
                <div className='container about__story-container'>
                    <div className='about__section-image'>
                        <img src={StoryImage} alt='Our Story'/>
                    </div>
                    <div className='about__section-content'>
                        <h1>Nossa história</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query?
                        </p>
                    </div>
                </div>
            </section>
            <section className='about__vision'>
                <div className='container about__vision-container'>
                    <div className='about__section-content'>
                        <h1>Nossa Visão</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                    </div>
                    <div className='about__section-image'>
                        <img src={VisionImage} alt='Our vision'/>
                    </div>
                </div>
            </section>
            <section className='about__mission'>
                <div className='container about__mission-container'>
                    <div className='about__section-image'>
                        <img src={MissionImage} alt='Our Mission'/>
                    </div>
                    <div className='about__section-content'>
                        <h1>Nossa missão</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query?
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
