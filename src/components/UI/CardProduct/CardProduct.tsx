import { NavLink } from "react-router-dom";
import "./CardProduct.css"
import LabelsCard from "../LablesCard/LabelsCard";
import ButtonInCardProduct from "../ButtonInCardProduct/ButtonInCardProduct";
import { IProductInXEelement } from "../../../Interfaces";



const CardProduct:React.FC<IProductInXEelement>= ({product}) => {
    let price:number = Number(product.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(product.action/100));

    return (
        <div className="card-product">
            <div className="top-cont">
                {<NavLink to={`/menu/${product.type}/${product.id}`}> <img title={`Страва ${product.title} меню SUSHI MASTER`} className="card-photo" src={product.photo} alt="" /></NavLink>}
            </div>
            {<LabelsCard labels={product.labels}/>}
            <div className="down-cont">
                <div className="cont-weight">
                    {product.harch.weight} Г
                </div>
                <div title={`${product.title}`}  className="cont-name">
                    {product.title}
                </div>
                <div title={`${product.body}`} className="cont-description">
                    {product.body}
                </div>
                <div className="cont-priceAndButton">
                    <div className="price">
                        {product.action>0? <div className="action">{price} грн&nbsp;<span>{product.price}</span></div> : <span>{product.price}</span>}
                    </div>
                    <div className="cont-button">
                       {<ButtonInCardProduct product={product}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;