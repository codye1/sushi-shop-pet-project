import { SetStateAction } from "react";
import {  IProduct } from "../../interfaces";
import { IFormFilterAndSort } from "./FilterAndSortModal/FilterAndSortModal";

export function sortAndFilterProducts(formFiltrAndSort: IFormFilterAndSort,products: IProduct[], setProducts: (value: SetStateAction<IProduct[] | undefined>) => void) {

    products = filterByLabels(formFiltrAndSort.labels,products)
    products = sortPrice(formFiltrAndSort.price,products)
    products = sortWeight(formFiltrAndSort.weight,products)
    setProducts(products)
}

function filterByLabels(labels: string[],products:IProduct[]) {

    if(labels.length>0){
        let productsTemp:IProduct[] = []
        for (let i = 0; i < labels.length; i++) {
            console.log(labels);

                productsTemp = [...productsTemp , ...products.filter((p)=>{
                    for (let k = 0; k < p.labels.length; k++) {
                        console.log(p.labels[k].title + ""+ labels[i]);
                        if(p.labels[k].title==labels[i]){

                            return true
                        }
                    }
                    return false
                })]
        }
        return productsTemp
    }
    console.log(products);

    return products
}

function sortPrice(price: string,products: IProduct[]) {
    if(price!="1"){

        products.sort((a, b) =>{
            let aprice:number = a.price;
            aprice -= Math.floor(aprice*(a.discount/100))
            let bprice:number = b.price;
            bprice -= Math.floor(bprice*(b.discount/100))
            if(price=="2"){
                return aprice > bprice ? 1 : -1;
            }
            else
                return aprice < bprice ? 1 : -1
        } )

    }
    return products
}

function sortWeight(weight: string,products: IProduct[]) {
    if(weight !='4'){
        products.sort((a, b) =>{
            if(weight=='5')
                return a.harch.weight > b.harch.weight ? 1 : -1
            else
                return a.harch.weight <b.harch.weight ? 1 : -1
        } )

    }

    return products
}