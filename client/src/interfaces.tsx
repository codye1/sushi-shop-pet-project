
export interface ILabel{
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
      discount:number
      price:number
      body:string
      img:string
      labels:ILabel[]
      attributes:string
      bonus:number
      harch:{
          weight:number,
          fats?:number,
          protein?:number,
          carbohydrates?:number,
          calories?:number
      }
      sklad:[string]
    }
export interface IPromotion{
        id:string
        img: string,
        imgWide:string,
        key: number,
        title:string,
        description:string,
        promotionalCode?:string,
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
        type?:string
    }
export interface ILabelsInXElement{
        labels:ILabel[]
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



export interface deliveryAddresses{

    street: string,
    house:string,
    intercom:string,
    apartment:string,
    entrance:string,
    floor:string,
    name:string,
    _id?:string
}


export interface user{
  id:string,
  number:string
  deliveryAddresses:deliveryAddresses[],
  name:string,
  email:string,
  birthDate:number[]
  img:string
}

export type AuthResponce = {
  refreshToken:string,
  accessToken:string,
  user:user
  error?:string
}



export interface send{
  number:string
  code:number | string
}
