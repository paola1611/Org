import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="social-media">
            <a href="">
                <img src="/img/facebook.png" alt=""></img>
            </a>
            <a href="">
                <img src="/img/twitter.png" alt=""></img>
            </a>
            <a href="">
                <img src="/img/instagram.png" alt=""></img>
            </a>
        </div>
        <img src="/img/Logo.png"></img>
        <strong>Desarrollado por Paola</strong>
    </footer>
}

export default Footer