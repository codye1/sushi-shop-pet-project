import { FC } from "react";
import { IProductInXEelement } from "../../../../../interfaces";
import "./ProductInfo.css"


const ProductInfo:FC<IProductInXEelement> = ({product}) => {
    return (
        <div className="product-info">
            <h1>Харчова цінність:</h1>
            <div className="info-element d-flex space-between">
                <h2>Вага,г </h2>
                <h3>{product.harch.weight}</h3>
            </div>
            {product.harch.fats &&
                <div className="info-element d-flex space-between">
                    <h2>Жири,г </h2>
                    <h3>{product.harch.fats}</h3>
                </div>
            }
            {product.harch.squirrels &&
                <div className="info-element d-flex space-between">
                    <h2>Білки,г </h2>
                    <h3>{product.harch.squirrels}</h3>
                </div>
            }
            {product.harch.carbohydrates &&
                <div className="info-element d-flex space-between">
                    <h2>Вуглеводи,г </h2>
                    <h3>{product.harch.carbohydrates}</h3>
                </div>
            }
            {product.harch.dung &&
                <div className="info-element d-flex space-between">
                    <h2>Кал,г </h2>
                    <h3>{product.harch.dung}</h3>
                </div>
            }
        </div>
    );
};

export default ProductInfo;