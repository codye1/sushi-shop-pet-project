import { IProductsInXEelement } from "../../../interfaces";
import CardProduct from "../CardProduct/CardProduct";
import "./ProductList.css"

const ProductList:React.FC<IProductsInXEelement> = ({products}) => {
    return (
        <div className="d-flex">
                <div className="container">
                    <div>
                        {
                        products.length>0?
                        <div  className="product-list">
                            {products.map((p)=>
                        <CardProduct key={p.key} product={p}/>)}
                        </div>
                        :
                        <div className="no-data d-flex center wrap column">
                            <img src="https://kyiv.sushi-master.ua/img/products/empty.svg" alt="" />
                            <p>Тут поки немає даних</p>
                        </div>
                        }
                    </div>
                </div>
            </div>

    );
};

export default ProductList;