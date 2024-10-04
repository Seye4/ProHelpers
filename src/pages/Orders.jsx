import { useLoaderData, redirect} from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import {OrdersList, SectionTitle} from '../components/Input'

export const loader = (store) => async({request}) => {
  const user = store.getState().userState

  if(!user) {
    toast.warn('you must be logged in to view orders')
    return redirect('/login')
  }

  const params = Object.fromEntries([
    ...new URL(request.URL).searchParams.entries()
  ])

  try {
    const response = await customFetch.get('/orders', {
      params, headers: {
        Authorization: `Bearer ${user.token}`
      }
    })

    return {orders: response.data.data, meta:response.data.meta}
  } 
  catch (error) {
    
    const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your order'
      toast.error(errorMessage)

      if( error.response.status === 401 || 403) return redirect('/login')
      return null
  }

}

const Orders = () => {
  const {meta}= useLoaderData()
  if(meta.pagination.total < 1)
  {
    return <SectionTitle text1='please make an order' />
  }
  
  return (
    <>
      <SectionTitle text1="your orders" />
      <OrdersList />
      {/* <PaginationContainer /> */}
    </>
  )
}

export default Orders