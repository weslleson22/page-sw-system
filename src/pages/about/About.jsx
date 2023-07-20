import './about.css';
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
            Nosso aplicativo de estimulação cognitiva proporciona exercícios personalizados e divertidos para pacientes com Alzheimer, ajudando a preservar e melhorar suas habilidades cognitivas. Junte-se a nós para promover uma mente ativa e saudável.
            </Header>
            <section className='about__story'>
                <div className='container about__story-container'>
                    <div className='about__section-image'>
                        <img src={StoryImage} alt='Our Story'/>
                    </div>
                    <div className='about__section-content'>
                        <h1>Nossa história</h1>
                        <p>
                        A jornada que nos trouxe ao desenvolvimento deste aplicativo para Alzheimer é impulsionada por um propósito profundo e uma paixão incansável por melhorar a qualidade de vida das pessoas afetadas por esta doença debilitante. Ao longo dos anos, testemunhamos de perto o impacto do Alzheimer em pacientes, familiares e cuidadores, e sentimos a necessidade urgente de oferecer uma solução inovadora e compassiva.
                        </p>
                        <p>
                        Acreditamos que a tecnologia tem o poder de criar um impacto significativo na vida das pessoas, e com esse pensamento, embarcamos nesta jornada com um objetivo claro: fornecer um apoio abrangente, acessível e personalizado para aqueles que enfrentam os desafios do Alzheimer.
                        </p>
                        <p>
                        Estamos orgulhosos desta jornada e esperamos que nosso aplicativo possa fazer a diferença na vida das pessoas, tornando a jornada com o Alzheimer mais gerenciável, acolhedora e esperançosa. É com imensa gratidão que seguimos em frente, guiados pela vontade de fazer a diferença e tornar o mundo um lugar melhor para aqueles que enfrentam essa condição desafiadora.
                        </p>
                    </div>
                </div>
            </section>
            <section className='about__vision'>
                <div className='container about__vision-container'>
                    <div className='about__section-content'>
                        <h1>Nossa Visão</h1>
                        <p>
                        Nosso aplicativo de estimulação cognitiva oferece uma ampla variedade de exercícios interativos, desafios e jogos projetados especificamente para as necessidades dos pacientes com Alzheimer, visando melhorar suas habilidades cognitivas, memória e atenção.
                        </p>
                        <p>
                        Nosso serviço de consultoria especializada oferece suporte personalizado, informações atualizadas, estratégias práticas e um espaço seguro para os familiares e cuidadores se sentirem ouvidos e apoiados em sua jornada com o Alzheimer.
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
                        Desenvolveremos uma plataforma online onde os cuidadores poderão criar perfis, participar de fóruns de discussão, compartilhar recursos úteis, ler histórias inspiradoras de outros cuidadores, agendar encontros virtuais e obter orientações de profissionais especializados.
                        </p>
                        <p>
                        Nossa equipe de especialistas em Alzheimer fornecerá consultoria individualizada, realizando avaliações das necessidades do paciente, oferecendo informações sobre a doença, orientando sobre técnicas de comunicação efetiva, fornecendo estratégias de gerenciamento comportamental e oferecendo suporte emocional para familiares e cuidadores.
                        </p>
                        <p>
                        Forneceremos cuidadores experientes e treinados especificamente para lidar com as necessidades dos pacientes com Alzheimer. Eles ajudarão nas atividades diárias, monitorarão a medicação, garantirão a segurança do ambiente e oferecerão apoio emocional e social para o paciente e sua família.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
