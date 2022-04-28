import React from 'react';
import logoTempleTexto from '../images/Temple-Logo-Texto.png'
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
                        transition={{ duration: 1 }}>
                        {/* <img src={logoTempleTexto} alt="" /> */}
                        <h1>Temple</h1>
                        <p><strong>SOLUCIONES</strong> METALÚRGICAS</p>
                    </motion.div>
                </div>
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
            </div>
        </>
    )
}

export default Header