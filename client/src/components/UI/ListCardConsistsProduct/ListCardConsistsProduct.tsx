import { Product } from '../../../API';
import ConsistsСardProduct from '../ConsistsСardProduct/СardConsistsProduct';
import "./ListCardConsistsProduct.css"
type ProductLists={
    products:Product[]
}
const ListCardConsistsProduct:React.FC<ProductLists> = ({products}) => {

    return (
        <div className='list-consists-container'>
            {products.map((p)=><ConsistsСardProduct key={p.key} product={p}/>)}
        </div>
    );
};

export default ListCardConsistsProduct;