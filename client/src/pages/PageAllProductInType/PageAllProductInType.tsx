import { useParams } from "react-router-dom";
import "./PageAllProductInType.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import { useGetProductsByTypeQuery } from "../../API";
import { IProduct } from '../../interfaces';
import { useEffect, useState } from "react";
import FilterModal, { IformaFiltra } from "./FilterModal/FilterModal";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import SekeletonCardProduct from "../../components/UI/SkeletonCardProduct/SekeletonCardProduct";

const PageAllProductInType = () => {
    const params = useParams()
    const {data,error:productsError,isLoading:productsLoading}= useGetProductsByTypeQuery(`${params?params.type : ''}`)
    const [products,setProducts] = useState(data && [...data])
    const [labels,setlabels]=useState<string[]>([''])
    const [modalVissible,setModalVissible] = useState(false)
    const [formaFiltra,setFormaFiltra] = useState<IformaFiltra>({
        price:'1',
        weight:'4',
        labels:[]
    })
    const ApplyFilters = ()=>{
        setModalVissible(false)
        if(data && products){
            let FilteredProducts = [...data]
            if(formaFiltra.labels.length>0){
                let FilteredProductsTemp:IProduct[] = []
                for (let i = 0; i < formaFiltra.labels.length; i++) {
                    console.log(formaFiltra.labels);

                        FilteredProductsTemp = [...FilteredProductsTemp , ...FilteredProducts.filter((p)=>{
                            for (let k = 0; k < p.labels.length; k++) {
                                console.log(p.labels[k]);
                               if(p.labels[k].title==formaFiltra.labels[i]){
                                return true
                               }
                            }
                            return false
                        })]
                }
                FilteredProducts=FilteredProductsTemp
                /*
                for (let i = 0; i < formaFiltra.labels.length; i++) {
                    FilteredProducts = FilteredProducts.filter((p)=>{
                        for (let k = 0; k < p.labels.length; k++) {
                            if(p.labels[k].title==formaFiltra.labels[i]){
                                return true;
                            }
                        }
                        return false
                    })
                }
                */
            }

            if(formaFiltra.price!="1"){
                console.log(FilteredProducts);

                FilteredProducts.sort((a, b) =>{
                    let aprice:number = Number(a.price.replace(/[^0-9]/g,""));
                    aprice -= Math.floor(aprice*(a.discount/100))
                    let bprice:number = Number(b.price.replace(/[^0-9]/g,""));
                    bprice -= Math.floor(bprice*(b.discount/100))
                    if(formaFiltra.price=="2"){
                        console.log("фільтрую за меншою ціною");
                        return aprice > bprice ? 1 : -1;
                    }
                    else
                        return aprice < bprice ? 1 : -1
                } )

            }

                if(formaFiltra.weight !='4'){
                    FilteredProducts.sort((a, b) =>{
                        if(formaFiltra.weight=='5')
                            return a.harch.weight > b.harch.weight ? 1 : -1
                        else
                            return a.harch.weight <b.harch.weight ? 1 : -1
                    } )

                }


            setProducts(FilteredProducts)
           }
    }
    // Функция для обновления данных в родительском компоненте
    const updateDataArray = (newData: IformaFiltra) => {
        setFormaFiltra(newData);
        setModalVissible(false)

    };


    useEffect(()=>{
        setProducts(data && [...data])
        console.log("ss");

    },[data])

    function getAlllabelsLabels(products:IProduct[]){
        const FilteredProducts = products && [...products]
        const labels= new Set()
        for (let i = 0; i < FilteredProducts.length; i++) {
            for (let k = 0; k < FilteredProducts[i].labels.length; k++) {
                labels.add(FilteredProducts[i].labels[k].title)
            }
        }
        setlabels(Array.from(labels) as string[])
    }

    return (
        <div>
            {productsError?
            <div></div>:
            productsLoading?
            <SekeletonCardProduct/>:
            products?
            <div>
                <div className="d-flex">
                    <div className="container">
                        <div className="page-title d-flex space-between align-center">
                            Сети
                            <div onClick={()=>{
                                setModalVissible(true)
                                getAlllabelsLabels(products)
                                }}  className="button-open-modal-filter d-flex space-between pointer">
                                <img src="https://kyiv.sushi-master.ua/img/products/filters.svg" alt="" />
                                Фільтр і сортування
                            </div>
                        </div>
                    </div>
                </div>
                {modalVissible?<FilterModal ApplyFilters={ApplyFilters} onUpdateData={updateDataArray} labels={labels} ParentFormaFiltra={formaFiltra} /> : null}
                <ProductList products={products}/>
            </div>
            :null
            }
            {params.type && <Breadcrumb crumbs={[params.type]}/>}
        </div>
    );
};

export default PageAllProductInType;