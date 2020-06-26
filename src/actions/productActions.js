import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  PRODUCT_EDIT,
  START_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR
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


export function getProductsAction() {
  return async dispatch => {
    dispatch(getProducts())
    try {
      const response = await axiosClient.get('/products')
      dispatch(getProductsSuccess(response.data))
    } catch(error) {
      dispatch(getProductsError(true))
    }
  }
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true
})

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
})

const getProductsError = status => ({
  type: GET_PRODUCTS_ERROR,
  payload: status
})


export function deleteProductsAction(productId) {
  return async dispatch => {
    dispatch(deleteProduct(productId))
    try {
      const response = await axiosClient.delete(`/products/${productId}`)
      console.log(response)
      dispatch(deleteProductSuccess(productId))
      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      )
    } catch(error) {
      dispatch(deleteProductError(true))
    }
  }
}

const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId
})

const deleteProductSuccess = productId => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: productId
})

const deleteProductError = status => ({
  type: DELETE_PRODUCT_ERROR,
  payload: status
})


export function setEditProductAction(product) {
  return async dispatch => {
    dispatch(editProduct(product))
  }
}

const editProduct = (product) => ({
  type: PRODUCT_EDIT,
  payload: product
})

export function editProductAction(product) {
  return async dispatch => {
    dispatch(startEditProduct())
    try {
      const response = await axiosClient.put(`/products/${product.id}`, product)
      console.log(response)
      dispatch(editProductSuccess(product))
    } catch(error) {
      dispatch(editProductError(true))
    }
  }
}

const startEditProduct = () => ({
  type: START_PRODUCT_EDIT
})

const editProductSuccess = product => ({
  type: PRODUCT_EDIT_SUCCESS,
  payload: product
})

const editProductError = status => ({
  type: PRODUCT_EDIT_ERROR,
  payload: status
})