import { useParams } from "react-router-dom";
import "./PageAllProductInType.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import { useSearchProductQuery } from "../../API";

const PageAllProductInType = () => {
    const params = useParams()
    const {data:products,error,isLoading}= useSearchProductQuery(`${params?params.type : 's'}`)

    return (
        <div>
            {error?
            <div></div>:
            isLoading?
            <div></div>:
            products?
            <ProductList products={products}/>
            :null
            }
        </div>
    );
};

export default PageAllProductInType;