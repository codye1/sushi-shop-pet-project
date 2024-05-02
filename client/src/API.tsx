import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductResponse, IProduct,  IPromotionResponse, IPromotion, IRestourantResponse, deliveryAddresses, user, AuthResponce, send } from './interfaces';

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'




const baseQuery = fetchBaseQuery({
  baseUrl: 'https://sushi-shop-pet-project-m7t7.vercel.app',
  prepareHeaders: (headers ) => {
      headers.set('Authorization', `Barer ${localStorage.getItem('token')}`);
    return headers;
  },
  credentials:"include",

})
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)



  if (result.error && result.error.status === "PARSING_ERROR") {
    const refreshResult = await baseQuery('auth/refresh', api, extraOptions)
    if (refreshResult.data) {
      console.log("cработало");
      // Не міг дати AuthResponse для refreshResult.data, тому зробив так
      const data:AuthResponce = JSON.parse(JSON.stringify(refreshResult.data))
      localStorage.setItem("token",data.accessToken)
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Get'],
    endpoints: (build) => ({
      getAllProducts: build.query<IProductResponse, void>({
        query: () => '/products'

      }),
      getProduct: build.query<IProduct, string>({
        query: (id) => `products/${id}`
      }),
      getProductsByIds: build.query<IProductResponse, string[]>({
        query: (ids) => `/product?id=${ids.join('&id=')}`,
      }),
      getProductsByInput: build.query<IProductResponse, string>({
        query: (input) => `/product?title_like=${input}`,
      }),
      getProductsByType: build.query<IProductResponse, string>({
        query: (input) => `/product?type_like=${input}`,
      }),
      getPromotions: build.query<IPromotionResponse, void>({
        query: () => '/promotions',
      }),
      getPromotionById: build.query<IPromotion, string>({
        query: (id) => `/promotions/${id}`,
      }),
      getRestaurants: build.query<IRestourantResponse, void>({
        query: () => '/restaurants',
      }),
      checkAuth: build.query<AuthResponce, void>({
        query: () => '/auth/refresh',
      }),
      send: build.mutation<AuthResponce,string>({
        query: (number) =>({
          url:"auth/send",
          method:'POST',
          body:{number}
        })
      }),
      login: build.mutation<AuthResponce,send>({
        query: (NumberAndCode) =>({
          url:"auth/login",
          method:'POST',
          body:{...NumberAndCode}
        })
      }),
      getUsers: build.query<user[], void>({
        query: () => 'auth/users'
        }),
      logout: build.mutation<user[], void>({
        query: () => ({
          url:'auth/logout',
          method:"POST"
        })
      }),
      refreshSMSCode: build.mutation<user[], string>({
        query: (number) => ({
          url:'auth/refreshSMSCode',
          method:"POST",
          body:{number}
        })
      }),
      addAddress: build.mutation<deliveryAddresses[], deliveryAddresses>({
        query: (deliveryAddresses) => ({
          url:'auth/addresses',
          body: deliveryAddresses,
          method:"POST"
        })
      }),
      deleteAddress: build.mutation<deliveryAddresses[], deliveryAddresses>({
        query: (deliveryAddresses) => ({
          url:'auth/addresses',
          body: deliveryAddresses,
          method:"DELETE"
        })
      }),
      putAddress: build.mutation<deliveryAddresses[],deliveryAddresses>({
        query: (deliveryAddresses) => ({
          url:'auth/addresses',
          body: deliveryAddresses,
          method:"PUT"
        })
      }),
      saveName: build.mutation<user[], string>({
        query: (name) => ({
          url:'auth/save/name',
          method:"POST",
          body:{name}
        })
      }),
      saveImg: build.mutation<user[], string>({
        query: (img) => ({
          url:'auth/uploadimg',
          method:"POST",
          body:{img}
        })
      }),
      saveEmail: build.mutation<user[], string>({
        query: (email) => ({
          url:'auth/save/email',
          method:"POST",
          body:{email}
        })
      }),
      saveBirthDate: build.mutation<user[], number[]>({
        query: (birthDate) => ({
          url:'auth/save/birth-date',
          method:"POST",
          body:{birthDate}
        })
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
    useGetRestaurantsQuery,
    useSendMutation,
    useGetUsersQuery,
    useLoginMutation,
    useLogoutMutation,
    useRefreshSMSCodeMutation,
    useCheckAuthQuery,
    useAddAddressMutation,
    useDeleteAddressMutation,
    usePutAddressMutation,
    useSaveBirthDateMutation,
    useSaveEmailMutation,
    useSaveNameMutation,
    useSaveImgMutation
  } = api