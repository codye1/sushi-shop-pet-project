import { Tovar } from "../../../API";
import "./CardTovar.css"

type Card={
    tovar:Tovar
}

const CardTovar:React.FC<Card>= ({tovar}) => {
    let price:number = Number(tovar.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(tovar.action/100));

    return (
        <div className="card-tovar">
            <div className="top-cont">
                <img className="card-photo" src={tovar.photo} alt="" />
            </div>
            <div className="product-labels">
                {tovar.gurman?
                    <div className="gourmetsChoice">
                        Вибір гурманів
                    </div>
                    :
                    false
                }
                {tovar.promotion?
                    <div className="promotion">
                        Акція
                    </div>
                    :
                    false
                }
                {tovar.action>0?
                    <div className="discount">
                        Знижка -{Math.round(tovar.action)}%
                    </div>
                    :
                    false
                }
                {tovar.rollFree?
                    <div className="rollGift">
                       Рол у подарунок
                    </div>
                : false}
            </div>
            <div className="down-cont">
                <div className="cont-weight">
                    {tovar.harch.weight} Г
                </div>
                <div className="cont-name">
                    {tovar.title}
                </div>
                <div className="cont-description">
                    {tovar.body}
                </div>
                <div className="cont-priceAndButton">
                    <div className="price">
                        {tovar.action>0? <div className="action">{price} грн&nbsp;<span>{tovar.price}</span></div> : <span>{tovar.price}</span>}
                    </div>
                    <div className="cont-button">
                        <div className="button">
                            В КОШИК
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTovar;