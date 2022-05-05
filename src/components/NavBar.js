import React, { useState } from 'react';
import img from '../images/temple-logo.png';
import { motion } from 'framer-motion';
import "../App.css";

function NavBar() {

    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');

    const navToggle = () => {
        active === "nav__menu"
            ? setActive('nav__menu nav__active')
            : setActive('nav__menu');

        toggleIcon === 'nav__toggler'
            ? setToggleIcon('nav__toggler toggle')
            : setToggleIcon('nav__toggler');
    }




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
                    transition: 0.5
                }}
            >
                <a href="">
                    <img src={img} alt="temple logo" className='logo-navbar' />
                </a>
            </motion.div>
            <ul className={active}>
                <li className='nav__item'>
                    <motion.a
                        href="#about"
                        className="link nav__link"
                        onClick={navToggle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Nosotros</span>
                    </motion.a>
                </li>
                <li className='nav__item'>
                    <motion.a
                        href="#history"
                        className="link nav__link"
                        onClick={navToggle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Historia</span>
                    </motion.a>
                </li>
                <li className='nav__item'>
                    <motion.a
                        href="#calidad"
                        className="link nav__link"
                        onClick={navToggle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Calidad</span>
                    </motion.a>
                </li>
                <li className='nav__item'>
                    <motion.a
                        href="#contact"
                        className="link nav__link"
                        onClick={navToggle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <span>Contacto</span>
                    </motion.a>
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )

}

export default NavBar