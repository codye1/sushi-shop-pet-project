import { useParams } from "react-router-dom";
import "./PageAllProductInType.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import { useSearchProductQuery } from "../../API";

const PageAllProductInType = () => {
    const params = useParams()
    const {data,error,isLoading}= useSearchProductQuery(`${params?params.type : ''}`)

    return (
        <div>
            {error?
            <div></div>:
            isLoading?
            <div></div>:
            data?
            <ProductList product={data}/>
            :null
            }
        </div>
    );
};

export default PageAllProductInType;