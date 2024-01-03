import { IProductsInXEelement } from "../../../interfaces";
import CardProduct from "../CardProduct/CardProduct";
import "./ProductList.css"

const ProductList:React.FC<IProductsInXEelement> = ({products}) => {
    return (
        <div className="d-flex">
                <div className="container">
                    <div className="product-list">
                        {products.map((p)=>
                        <CardProduct key={p.key} product={p}/>
                        )
                        }

                    </div>
                </div>
            </div>

    );
};

export default ProductList;