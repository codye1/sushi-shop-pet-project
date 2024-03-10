import "./LeftCont.css"
import arrowDown from "../../../../icons/headerIcon/arrow-down.png"

const LeftCont = () => {
    return (
        <div className="left-cont">
            <div className="city">
                Ужгород
            </div>
            <div className="language">
                <span>UA</span>
                <img src={arrowDown} alt="" />
            </div>
            <div className="number">
                <a href="tel:0 800 330 333">0 800 330 333</a>
            </div>
        </div>
    );
};

export default LeftCont;