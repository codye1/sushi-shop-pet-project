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

    export interface IProductsInXEelement {
        products:IProduct[]
    }
    export interface IProductInXEelement {
        product:IProduct
    }

    export type IProductResponse = IProduct[]