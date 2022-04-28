import { motion } from 'framer-motion';
import icon1 from '../images/working-forge.svg';
import icon2 from '../images/electric-machine.svg';
import icon3 from '../images/printing.svg';

function Features() {
    return (
        <div id='features' className="container-features">
            <div className="features-title">
                <h1>CARACTERISTICAS</h1>
            </div>
            <div className="container-features-inner">
                <div className="single-feature">
                    <motion.div
                        className="feature-icon-circle"
                        whileHover={{
                            scale: [1, 1.5, 1.5, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["50%", "20%", "20%", "50%", "50%"],
                        }}>
                        <img src={icon1} alt="icono" />
                    </motion.div>
                    <h3>Realización de obras metalurgicas</h3>
                </div>
                <div className="single-feature">
                    <motion.div
                        className="feature-icon-circle"
                        whileHover={{
                            scale: [1, 1.5, 1.5, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["50%", "20%", "20%", "50%", "50%"],
                        }}>
                        <img src={icon2} alt="icono" />
                    </motion.div>
                    <h3>Metalizacion por Arco Voltaico</h3>
                </div>
                <div className="single-feature">
                    <motion.div
                        className="feature-icon-circle"
                        whileHover={{
                            scale: [1, 1.5, 1.5, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["50%", "20%", "20%", "50%", "50%"],
                        }}>
                        <img src={icon3} alt="icono" />
                    </motion.div>
                    <h3>Trabajos de mecanizados especiales</h3>
                </div>
            </div>
        </div>
    )
}
export default Features