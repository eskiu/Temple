import img from '../images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
import { motion } from 'framer-motion'


function About() {
    return (
        <div id='about' className="about-container">
            <motion.div
                className="img-container-about"
                whileTap={{ scale: 0.95 }}
            >
                <img src={img} alt="" />
            </motion.div>
            <div className="about-content">
                <div className='text-content-about'>
                    <h1>NOSOTROS</h1>
                    <p>Somos una empresa que transforma un material noble y duradero como lo es el metal, en objetos de necesidad para la industria metalúrgica.
                        <br></br>
                        <br></br>
                        Nos destacamos por los altos estándares de calidad en la fabricación de productos metalúrgicos y realización de servicios metalúrgicos, avalándonos nuestra sólida experiencia en el mercado.
                        <br></br>
                        <br></br>
                        Brindamos un seguimiento cuidadoso para darle la solución pertinente, en cada caso en particular.</p>
                </div>
            </div>
        </div>
    )
}
export default About