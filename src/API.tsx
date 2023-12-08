import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface Product {
    key:number
    type:string
    id: string
    title: string
    action:number
    price:string
    body:string
    photo:string
    gurman:boolean
    rollFree:boolean
    promotion:boolean
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

  type ProductResponse = Product[]

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Sets'],
    endpoints: (build) => ({
      getSets: build.query<ProductResponse, void>({
        query: () => 'product',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),

      getSet: build.query<Product, string>({
        query: (id) => `product/${id}`,
        providesTags: (result, error, id) => [{ type: 'Sets', id }],
      }),
      getSetsByIds: build.query<ProductResponse, string[]>({
        query: (ids) => `product?id=${ids.join('&id=')}`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),
    }),
  })

  export const {
    useGetSetQuery,
    useGetSetsQuery,
    useGetSetsByIdsQuery
  } = api