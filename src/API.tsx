import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductResponse, IProduct } from './Interfaces';



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
    }),
  })

  export const {
    useGetSetQuery,
    useGetSetsQuery,
    useGetSetsByIdsQuery,
    useGetSearchProductQuery,
    useSearchProductQuery
  } = api