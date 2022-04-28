import { motion } from 'framer-motion';
import { useState } from 'react';

function History() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id='history' className="history-container">
            <div className="history-content">
                <div className='title-content-history'>
                    <h1>NUESTRA HISTORIA</h1>
                </div>
                <div className="text-content-history">
                    <p><strong>Alberto Pesiney en el año 1976 funda Hierros Neuquén, dedicándose a la venta de productos metalúrgicos, siendo pioneros en el rubro por muchos años dentro de la Patagonia.</strong>
                        <br></br>
                        <br></br>
                        En el año 1990 pasó a ser A. Pesiney y desde el 2003 hasta la actualidad somos Temple S.R.L. La empresa cambió de denominación por la propia evolución en varias oportunidades pero las personas que la llevamos adelante somos las mismas, al igual que la calidad que nos caracteriza.
                        <br></br>
                        <br></br>
                        En todos estos años, fuimos adaptándonos y superándonos día a día, para expandirnos en el mercado. En estos momentos nos dedicamos a los servicios y fabricación de productos metalúrgicos, transformando la materia prima en artículos de necesidad para la industria.
                        <br></br>
                        <br></br>
                        Todo ello, acompañado del avance tecnológico en las herramientas que utilizamos, como la metalización, corte por plasma y con la nueva adquisición, una máquina plegadora de alto calibre. Irrumpimos en el mercado local con una producción contable y de máxima calidad..</p>
                </div>
            </div>
            <motion.div
                transition={{ layout: { type: 'spring', duration: 1 } }}
                layout
                onClick={() => { setIsOpen(!isOpen) }}
                className="button-history-container"
                style={{
                    borderRadius: "1rem",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
                }}
            >

                <motion.h2 layout="position" className="nameButton-history-container">NUESTRA PLANTA</motion.h2>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="button-history-container-inner"
                    >
                        <br></br>
                        <ul>
                            <li>2000 m2 cubiertos de talleres.</li>
                            <li>Puentes Grúa de 5t.</li>
                            <li>Plegadora de 3m de 90t.</li>
                            <li>Plegadora de 3m de 40t.</li>
                            <li>Guillotina ¼” 2,5m.</li>
                            <li>Equipos de corte por Plasma hasta 2”.</li>
                            <li>Equipos de soldadura MMA 400/600 amp.</li>
                            <li>Equipos de Soldadura MIG Industriales y Móviles.</li>
                            <li>Curvadora CNC de tubos redondos.</li>
                            <li>Dobladora CNC de Estructurales, planchuelas, ángulos.</li>
                            <li>Torsionadora CNC de barras cuadradas.</li>
                            <li>Stock propio de Materiales Metalúrgicos, Chapas de dimensiones y espesores especiales.</li>
                            <li>Herrería Pesada para el Agro y la Industria.</li>
                            <li>Equipo de montaje.</li>
                            <li>Camión con Hidrogrúa para trabajos de montaje con barquilla.</li>
                            <li>Equipo de arenado para nuestros proyectos.</li>
                            <li>Compresor 15 HP.</li>
                        </ul>
                    </motion.div>}
            </motion.div>
        </div>
    )
}
export default History