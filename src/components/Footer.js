import git from '../images/icons8-github.svg'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <p>2022 TEMPLE - Todos los derechos reservados</p>
                <div className="footer-designBy">
                    <p>Designed and developed by santtiq:</p>
                    <a href="https://github.com/santtiq/" target="_blank">
                        <img src={git} alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer