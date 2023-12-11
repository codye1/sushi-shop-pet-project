import { Product } from "../../../API";
import CardProduct from "../CardProduct/CardProduct";
import "./ProductList.css"
//import { useState, useEffect } from 'react';
type ProductLists={
    product:Product[]
}



const ProductList:React.FC<ProductLists> = ({product}) => {
/*  const [numberOfElements,setNumberOfElements] = useState(9)
    useEffect(()=>{
        window.addEventListener('resize', (e) => {
            console.log(e);
            if (window.innerWidth<1350) {
                setNumberOfElements(7)
            }else{
                setNumberOfElements(9)
            }
          });

    })
*/
    return (
        <div className="product">
                <div className="product-cont">
                    <div className="product-list">
                        {product.map((p)=>
                        <CardProduct key={p.key} product={p}/>
                        )
                        }

                    </div>
                </div>
            </div>

    );
};

export default ProductList;