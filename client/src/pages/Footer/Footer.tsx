import "./Footer.css"
import LinksFooter from "./UI/LinksFooter/LinksFooter";
import PoolFooter from "./UI/PoolFooter/PoolFooter";
import DownBlock from "./UI/DownBlock/DownBlock";
import Separator from "../../components/UI/Separator/Separator";
import facebook from "../../icons/footerIcon/facebook.png"
import instagram from "../../icons/footerIcon/instagram.png"
import tiktok from "../../icons/footerIcon/tiktok.png"
const Footer = () => {
    return (
        <footer>
            <div className="container column">
                <PoolFooter/>
                <LinksFooter/>
                <div className="icons">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={tiktok} alt="" />
                </div>
                <Separator/>
                <DownBlock/>
            </div>
        </footer>
    );
};

export default Footer;