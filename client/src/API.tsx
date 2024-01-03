import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductResponse, IProduct,  IPromotionResponse, IPromotion, IRestourantResponse } from './interfaces';



export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Sets'],
    endpoints: (build) => ({
      getSets: build.query<IProductResponse, void>({
        query: () => 'product',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),
      getSet: build.query<IProduct, string>({
        query: (id) => `product/${id}`,
        providesTags: (result, error, id) => [{ type: 'Sets', id }],
      }),
      getSetsByIds: build.query<IProductResponse, string[]>({
        query: (ids) => `product?id=${ids.join('&id=')}`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),
      getSearchProduct: build.query<IProductResponse, string>({
        query: (input) => `product?title_like=${input}`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),
      SearchProduct: build.query<IProductResponse, string>({
        query: (input) => `product?type_like=${input}`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),
      getPromotions: build.query<IPromotionResponse, void>({
        query: () => 'promotions',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),
      getPromotionById: build.query<IPromotion, string>({
        query: (id) => `promotions/${id}`,
        providesTags: (result, error, id) => [{ type: 'Sets', id }],
      }),
      getRestourants: build.query<IRestourantResponse, void>({
        query: () => 'restourants',
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
    useGetSetsByIdsQuery,
    useGetSearchProductQuery,
    useSearchProductQuery,
    useGetPromotionsQuery,
    useGetPromotionByIdQuery,
    useGetRestourantsQuery
  } = api