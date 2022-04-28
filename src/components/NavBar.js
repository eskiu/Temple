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
                    <a href="#about" className="link link--elara">
                        <span>Nosotros</span>
                    </a>
                    <a href="#history" className="link link--elara">
                        <span>Historia</span>
                    </a>
                    <a href="#" className="link link--elara">
                        <span>Galeria</span>
                    </a>
                    <a href="#calidad" className="link link--elara">
                        <span>Calidad</span>
                    </a>
                    <a href="#" className="link link--elara">
                        <span>Valores</span>
                    </a>
                    <a href="#" className="link link--elara">
                        <span>Contacto</span>
                    </a>
                </li>
            </div>
        </nav>
    )

}

export default NavBar