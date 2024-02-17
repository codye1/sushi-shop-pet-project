
import "./Footer.css"
import LinksFooter from "./UI/LinksFooter/LinksFooter";
import PoolFooter from "./UI/PoolFooter/PoolFooter";
import DownBlock from "./UI/DownBlock/DownBlock";

const Footer = () => {
    return (
        <footer>
            <div className="container column">
                <PoolFooter/>
                <LinksFooter/>
                <div className="icons">
                    <img src="https://uzhhorod.sushi-master.ua/img/footer/facebook.svg" alt="" />
                    <img src="https://uzhhorod.sushi-master.ua/img/footer/instagram.svg" alt="" />
                    <img src="https://uzhhorod.sushi-master.ua/img/footer/tiktok.svg" alt="" />
                </div>
                <div className="line"></div>
                <DownBlock/>
            </div>
        </footer>
    );
};

export default Footer;