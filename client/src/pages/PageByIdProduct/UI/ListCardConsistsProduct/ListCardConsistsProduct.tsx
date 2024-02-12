import { IProductsInXEelement } from '../../../../interfaces';
import ConsistsСardProduct from './ConsistsСardProduct/СardConsistsProduct';
import "./ListCardConsistsProduct.css"

const ListCardConsistsProduct:React.FC<IProductsInXEelement> = ({products}) => {
    return (
        <div className='list-consists-container'>
            {products.map((p)=><ConsistsСardProduct key={p.key} product={p}/>)}
        </div>
    );
};

export default ListCardConsistsProduct;