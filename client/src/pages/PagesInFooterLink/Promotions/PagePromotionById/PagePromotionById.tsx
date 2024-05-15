import "./PagePromotionById.css"
import { useParams } from "react-router-dom";
import { params } from "../../../../interfaces";
import { useGetProductsByIdsQuery, useGetPromotionByIdQuery } from "../../../../API";
import Breadcrumb from "../../../../components/UI/Breadcrumb/Breadcrumb";
import RecommendationSlider from "../../../../components/UI/RecommendationSlider/RecommendationSlider";



const PagePromotionById = () => {
    const params:params = useParams()
    const {data:promotion,error:promotionError,isLoading:promotionLoading} = useGetPromotionByIdQuery(`${params.id? params.id : ''}`)
    const {data:products } = useGetProductsByIdsQuery(promotion?.productInPromotion? promotion.productInPromotion : [''])

   console.log(promotion?.productInPromotion);
    console.log(params);

    return (
        <div>
            {promotionError?
            <div>Помилка</div>:
            promotionLoading?
            <div>Помилка</div>:
            promotion?
            <div className="promotion-id">
                <div className="d-flex">
                    <div className="container column">
                        <div className="promotion-img"><img src={promotion.imgWide} alt="" /></div>
                        <div className="promotion-html">
                                <h1>{promotion.title}</h1>
                                <div className="html" dangerouslySetInnerHTML={{ __html: promotion.html }} >
                                </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="container">
                        <div className="promotion-html">
                            {promotion.productInPromotion.length==0?
                                    <a className="promotion-button" href=""><span>Перейти</span></a>:
                                    products && <RecommendationSlider products={products}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            :
            null
            }
            {promotion && <Breadcrumb crumbs={["promotions",promotion.title]} />}
        </div>
    );
};

export default PagePromotionById;

