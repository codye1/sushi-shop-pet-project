import { NavLink } from "react-router-dom";
import "./LinksFooter.css"

const LinksFooter = () => {
    return (
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
    );
};

export default LinksFooter;