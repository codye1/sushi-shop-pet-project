import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="poll-container">
                    <div className="poll">
                        <div>
                            <h1>Замовляв в Sushi Master?</h1>
                            <h2>Пройди опитування. Допоможи нам стати краще!</h2>
                        </div>
                        <div className="poll-button">
                            Пройти опитування
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="footer-links">
                    <div className="links">
                        <div className="links-block">
                            <h1>SUSHI MASTER</h1>
                            <a href="">Про компанію</a>
                            <a href="">Акції</a>
                        </div>
                        <div className="links-block">
                            <h1>Юридична інформація</h1>
                            <a href="">Публічна оферта</a>
                            <a href="">Політка конфіденційності</a>
                        </div>
                        <div className="links-block">
                            <h1>Доставка та ресторани</h1>
                            <a href="">Доставка та самовиніс</a>
                            <a href="">Наші ресторани</a>
                        </div>
                        <div className="links-block">
                            <h3>Підтримка</h3>
                            <h4>0 800 330 333</h4>
                            <h4>ZABOTA@SUSHI-MASTER.UA</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="footer-icons">
                    <div className="icons">
                        <img src="https://uzhhorod.sushi-master.ua/img/footer/facebook.svg" alt="" />
                        <img src="https://uzhhorod.sushi-master.ua/img/footer/instagram.svg" alt="" />
                        <img src="https://uzhhorod.sushi-master.ua/img/footer/tiktok.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-line">
                    <div className="line">

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-down-block">
                    <div className="down-block">
                        <div className="left-block">
                            <h1>© Sushi Master. Усі права захищені</h1>
                            <img src="https://uzhhorod.sushi-master.ua/img/footer/visa-mastercard.svg" alt="" />
                        </div>
                        <div className="right-block">
                            <h1>Cайт розроблений з 💚  командою </h1>
                            <div>
                                <span style={{color:"green"}}>IT</span>
                                <span>X100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;