
export interface ILabels{
    title:string,
    background:string,
    color:string,
  }

export interface IProduct {
      key:number
      type:string
      additions:string[]
      id: string
      title: string
      action:number
      price:string
      body:string
      photo:string
      labels:ILabels[]
      harch:{
          weight:number,
          fats:number,
          squirrels:number,
          carbohydrates:number,
          dung:number
      }
      sklad:[string]
      filadelfiya:boolean
    }
export interface IPromotion{
        id:string
        img: string,
        imgWide:string,
        key: number,
        title:string,
        description:string,
        productInPromotion:string[],
        html:string
    }

export interface IRestourant{
    id:string
    name:string
    description:string
    timetakeaway:string[]
    timedelivery:string[]
    coords:string
}



export interface params{
        id?:string;
    }

export interface IProductsInXEelement {
        products:IProduct[]
    }
export interface IPromotionsInXEelement{
        promotions:IPromotion[]
    }
export interface IRestourantsInXEelement{
        restourans:IRestourant[]
    }

export interface IProductInXEelement {
        product:IProduct
    }

export interface IPromotionInXEelement{
        promotion:IPromotion
    }
export interface IRestourantInXEelement{
        restourant:IRestourant
    }


export type IProductResponse = IProduct[]

export type IPromotionResponse = IPromotion[]

export type IRestourantResponse = IRestourant[]