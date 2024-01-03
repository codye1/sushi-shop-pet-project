import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="poll">
                    <div className="pool-text">
                        <h1>Замовляв в Sushi Master?</h1>
                        <h2>Пройди опитування. Допоможи нам стати краще!</h2>
                    </div>
                    <div className="poll-button">
                        Пройти опитування
                    </div>
                </div>
                <div className="links">
                    <div className="links-block">
                        <h1>SUSHI MASTER</h1>
                        <NavLink to={"/about"} className={({isActive})=>isActive? "open" : ``} >Про компанію</NavLink>
                        <NavLink to={"/promotions"} className={({isActive})=>isActive? "open" : ''} >Акції</NavLink>
                    </div>
                    <div className="links-block">
                        <h1>Юридична інформація</h1>
                        <NavLink to={"public-oferta"} className={({isActive})=>isActive? "open" : ''} >Публічна оферта</NavLink>
                        <NavLink to={"privacy"} className={({isActive})=>isActive? "open" : ''} >Політика конфіденційності</NavLink>
                    </div>
                    <div className="links-block">
                        <h1>Доставка та ресторани</h1>
                        <NavLink to={"delivery"} className={({isActive})=>isActive? "open" : ''} >Доставка та самовиніс</NavLink>
                        <NavLink to={"our-restourants"} className={({isActive})=>isActive? "open" : ''} >Наші ресторани</NavLink>
                    </div>
                    <div className="links-block">
                        <h3>Підтримка</h3>
                        <h4><a href="tel:0 800 330 333">0 800 330 333</a></h4>
                        <h4><a href="mailto:ZABOTA@SUSHI-MASTER.UA">ZABOTA@SUSHI-MASTER.UA</a></h4>
                    </div>
                    </div>
                <div className="icons">
                    <img src="https://uzhhorod.sushi-master.ua/img/footer/facebook.svg" alt="" />
                    <img src="https://uzhhorod.sushi-master.ua/img/footer/instagram.svg" alt="" />
                    <img src="https://uzhhorod.sushi-master.ua/img/footer/tiktok.svg" alt="" />
                </div>
                <div className="line"></div>
                <div className="down-block">
                    <div className="left-block">
                        <h1>© Sushi Master. Усі права захищені</h1>
                        <img src="https://uzhhorod.sushi-master.ua/img/footer/visa-mastercard.svg"alt=""/>
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
        </footer>
    );
};

export default Footer;