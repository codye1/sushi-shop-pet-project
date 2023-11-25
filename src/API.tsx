import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface Tovar {
    key:number
    id: string
    title: string
    action:number
    price:number
    body:string
    photo:string
    shef:boolean
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

  type TovarResponse = Tovar[]

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes: ['Sets'],
    endpoints: (build) => ({
      getSets: build.query<TovarResponse, void>({
        query: () => 'sets',
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Sets' as const, id })),
                { type: 'Sets', id: 'LIST' },
              ]
            : [{ type: 'Sets', id: 'LIST' }],
      }),

      getSet: build.query<Tovar, string>({
        query: (id) => `sets/${id}`,
        providesTags: (result, error, id) => [{ type: 'Sets', id }],
      }),

      getRolls: build.query<Tovar, string>({
        query: (id) => `rolls/${id}`,
        providesTags: (result, error, id) => [{ type: 'Sets', id }],
      }),
    }),
  })

  export const {
    useGetSetQuery,
    useGetSetsQuery,
    useGetRollsQuery,
  } = api