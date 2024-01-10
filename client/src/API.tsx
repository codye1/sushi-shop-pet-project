import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductResponse, IProduct,  IPromotionResponse, IPromotion, IRestourantResponse } from './interfaces';



export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Get'],
    endpoints: (build) => ({
      getAllProducts: build.query<IProductResponse, void>({
        query: () => 'product'
      }),
      getProduct: build.query<IProduct, string>({
        query: (id) => `product/${id}`
      }),
      getProductsByIds: build.query<IProductResponse, string[]>({
        query: (ids) => `product?id=${ids.join('&id=')}`,
      }),
      getProductsByInput: build.query<IProductResponse, string>({
        query: (input) => `product?title_like=${input}`,
      }),
      getProductsByType: build.query<IProductResponse, string>({
        query: (input) => `product?type_like=${input}`,
      }),
      getPromotions: build.query<IPromotionResponse, void>({
        query: () => 'promotions',
      }),
      getPromotionById: build.query<IPromotion, string>({
        query: (id) => `promotions/${id}`,
      }),
      getRestourants: build.query<IRestourantResponse, void>({
        query: () => 'restourants',
      }),
    }),
  })

  export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useGetProductsByIdsQuery,
    useGetProductsByInputQuery,
    useGetProductsByTypeQuery,
    useGetPromotionsQuery,
    useGetPromotionByIdQuery,
    useGetRestourantsQuery
  } = api