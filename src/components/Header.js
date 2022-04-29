import React from 'react';
import logoTempleTexto from '../images/Retroiluminado.png'
import { motion } from 'framer-motion';

function Header() {

    return (
        <>
            <div className='headerContainer'>
                <div className='headerImageContainer'>
                    <motion.div
                        className='headerTextContainer'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: .6 }}>
                        <img src={logoTempleTexto} alt="" />
                    </motion.div>
                </div>
                <a href="#features">
                    <motion.div
                        className="center-con"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}>
                        <div className="round">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </motion.div>
                </a>
            </div>
        </>
    )
}

export default Header