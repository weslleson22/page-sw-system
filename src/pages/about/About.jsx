import './about.css';
import Header from "../../components/header/Header";
import HeaderImage from '../../images/Sobre/00-capa.jpg'
import StoryImage from '../../images/Sobre/01-historia.jpg';
import VisionImage from '../../images/Sobre/03-visao.jpg';
import MissionImage from '../../images/Sobre/02-missao.jpg'
import React from 'react'
import SectionHead from '../../components/sectionHeader/SectionHead';
import { FaCrown } from 'react-icons/fa';
import Contact02 from '../contact/Contact02';

const About = () => {
    return (
        <>
            <Header title='Sobre' image={HeaderImage}>
            
            </Header>
            <SectionHead />
            
            <section className='about__story'>
                <div className='container about__story-container'>
                    <div className='about__section-image'>
                        <img src={StoryImage} alt='Our Story'/>
                    </div>
                    <div className='about__section-content'>
                        
                    
                        <h1>    📚🌟📖Nossa história📚🌟📖</h1>

                        <p>
                        Era o ano de 2017, e Wesleson Souza, um estudante dedicado de Análise e Desenvolvimento de Sistemas, estava prestes a se formar na universidade. Desde o início do curso, Wesleson sempre foi apaixonado por tecnologia e tinha habilidades excepcionais em programação.
                        </p>
                        <p>
                        Durante seus anos de estudo, Wesleson participou de diversos projetos acadêmicos, onde se destacou pela sua capacidade de desenvolver soluções inovadoras e eficientes através de software. Sua mente inquisitiva o levava constantemente a explorar novas tecnologias e tendências do mercado. Enquanto estava imerso nos estudos e no universo da programação, Wesleson começou a perceber uma grande oportunidade no mercado. Ele notou que muitas empresas locais, especialmente as pequenas e médias empresas, ainda não estavam aproveitando todo o potencial das soluções de software personalizadas para suas necessidades específicas. Foi então que Wesleson teve um insight transformador. Ele percebeu que poderia utilizar seus conhecimentos em desenvolvimento de sistemas para ajudar essas empresas a alavancarem seus negócios, otimizando processos e melhorando a eficiência operacional.
                        </p>
                        <p>
                        Movido por sua paixão pela programação e seu desejo de fazer a diferença no mundo dos negócios, Wesleson decidiu fundar sua própria empresa de desenvolvimento de software. Ele acreditava que sua visão e habilidades poderiam impactar positivamente a forma como as empresas utilizavam a tecnologia para alcançar seus objetivos.

                        Com dedicação e empenho, Wesleson estabeleceu sua empresa e, ao longo dos anos, conquistou a confiança de diversos clientes, entregando soluções de software sob medida para suas necessidades específicas. Sua empresa cresceu e se tornou conhecida no mercado por sua excelência no desenvolvimento de sistemas.

                        Hoje, Wesleson Souza é reconhecido como um empreendedor visionário e um talentoso desenvolvedor de sistemas. Sua jornada de sucesso é um exemplo inspirador para os alunos que também sonham em transformar suas paixões em empreendimentos bem-sucedidos no mundo da tecnologia.
                        </p>
                    </div>
                </div>
            </section>
            <section className='about__vision'>
                <div className='container about__vision-container'>
                    <div className='about__section-content'>
                        
                        <h1> 🚀Oferta Especial de Desenvolvimento de Software e Consultoria 🚀</h1>
                        <p>
                        Aproveite nossa oferta exclusiva de desenvolvimento de software e consultoria personalizada para alavancar o potencial do seu negócio! Nossa equipe de especialistas em tecnologia está pronta para criar soluções sob medida, impulsionando a eficiência e a inovação da sua empresa. Entre em contato agora mesmo e descubra como podemos transformar suas ideias em realidade! 💡💻 #DesenvolvimentoDeSoftware #ConsultoriaTecnológica #Inovação #Eficiência #TransformaçãoDigital
                        </p>
                      
                       
                        <h1>🌟 Nossa Visão 🌟</h1>
                        <p>
                        Na nossa empresa de desenvolvimento de software e consultoria, buscamos ser líderes na transformação digital, oferecendo soluções tecnológicas inovadoras e personalizadas para impulsionar o crescimento e o sucesso dos nossos clientes. Visamos ser reconhecidos como parceiros confiáveis, capacitando empresas de todos os tamanhos a atingirem seu máximo potencial por meio da tecnologia.
                        </p>
                        <p>
                        Acreditamos que, ao abraçar constantemente a evolução tecnológica e promover um ambiente colaborativo, seremos a escolha preferencial para aqueles que buscam o aprimoramento contínuo dos seus negócios. Nossa visão é inspirar e capacitar a jornada de transformação digital das empresas, trazendo inovação e eficiência para cada projeto que nos é confiado. 💡💼🚀 #TransformaçãoDigital #Inovação #ParceirosTecnológicos #Eficiência #CrescimentoEmpresarial.
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
                        <h1>🎯 Nossa Missão 🎯</h1>
                        <p>
                        Nossa missão é proporcionar um impacto significativo e positivo no mundo dos negócios, através do desenvolvimento de software e consultoria tecnológica de excelência. Buscamos entender profundamente as necessidades dos nossos clientes e oferecer soluções personalizadas que impulsionem sua produtividade, eficiência e competitividade no mercado.
                        </p>
                        <p>
                        Com dedicação e paixão pela inovação, estamos comprometidos em oferecer serviços de alta qualidade, mantendo a ética e a transparência em todas as nossas interações. Através de uma abordagem colaborativa, trabalhamos em estreita parceria com nossos clientes, fornecendo orientação estratégica e suporte técnico para alcançar seus objetivos empresariais.
                        </p>
                        <p>
                        Acreditamos que, ao cumprir nossa missão com excelência, não apenas contribuímos para o crescimento dos nossos clientes, mas também para o avanço da sociedade como um todo, através da tecnologia como catalisador do progresso.
                        </p>
                        <p>
                        Junte-se a nós nessa jornada de inovação e transformação. Estamos prontos para sermos o seu parceiro confiável, guiando-o rumo ao sucesso nos desafios tecnológicos do futuro. 💼💻🚀 #Inovação #TransformaçãoDigital #Excelência #ParceiroConfiança #ProgressoTecnológico
                        </p>
                    </div>
                    <h1>Formulário de Contato:</h1>
                    <p> Quer descobrir como a inovação pode melhorar a sua vida com Alzheimer? Entre em contato conosco. Tire suas dúvidas sobre como a inovação pode transformar sua vida com Alzheimer. Entre em contato!</p>
                    <p> Estamos à disposição para quaisquer perguntas ou sugestões. Entre em contato conosco!</p>
                    <p> Vamos ajudá-lo a redescobrir a vida com o Alzheimer. Entre em contato e saiba mais!</p>
                    
                    
                </div>
                
                <Contact02/>
            </section>
            
            
        </>
    )
}

export default About;
