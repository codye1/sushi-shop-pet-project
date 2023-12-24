
import { Product } from '../../../API';
import "./ConsistsСardProduct.css"

type Cards={
    product:Product
}


const ConsistsСardProduct:React.FC<Cards> = ({product}) => {
    return (
        <div className='card-container'>
            <div className='card-consists-img'>
                <img src={product.photo} alt="" />
            </div>
            <div className='card-consists-down-block'>
                <div className='price-consists'>
                    {product.harch.weight} г
                </div>
                <div className='name-consists'>
                    {product.title}
                </div>
                <div className='description-consists'>
                    {product.body}
                </div>
            </div>
        </div>
    );
};

export default ConsistsСardProduct;

