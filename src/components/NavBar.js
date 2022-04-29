import React from 'react';
import img from '../images/temple-logo.png';
import { motion } from 'framer-motion';

function NavBar() {

    return (
        <nav className='navbar-container'>
            <motion.div
                className='navbar-img-container'
                animate={{
                    scale: [1, 1.2, 1.2, 1],
                    rotate: [0, 180, 180, 0]
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 5
                }}
                whileHover={{
                    scale: 1.5,
                    transition: 1
                }}
            >
                <a href="">
                    <img src={img} alt="temple logo" className='logo-navbar' />
                </a>
            </motion.div>
            <div className='navbar-item-container'>
                <li className="navbar_item">
                    <motion.a
                        href="#about"
                        className="link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Nosotros</span>
                    </motion.a>
                    <motion.a
                        href="#history"
                        className="link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Historia</span>
                    </motion.a>
                    <motion.a
                        href="#calidad"
                        className="link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Calidad</span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Contacto</span>
                    </motion.a>
                </li>
            </div>
        </nav>
    )

}

export default NavBar