import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from './../types'
import axiosClient from './../config/axios'
import Swal from 'sweetalert2'

export function createNewProductAction(product) {
  return async dispatch => {
    dispatch(addProduct())
    try {
      await axiosClient.post('/products', product)
      dispatch(addProductSuccess(product))
      Swal.fire(
        'Success',
        'Product saved succesfully',
        'success'
      )
    } catch (error) {
      console.log(error)
      dispatch(addProductError(true))
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong, try again!'
      })
    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
})

const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
})

const addProductError = status => ({
  type: ADD_PRODUCT_ERROR,
  payload: status
})