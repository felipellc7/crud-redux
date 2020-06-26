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

const initialState = {
  products: [], 
  error: null,
  loading: false,
  deleteProduct: null,
  editProduct: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
    case GET_PRODUCTS:
      return {
        ...state,
        loading: action.payload
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case GET_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case PRODUCT_EDIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product.id !== state.deleteProduct),
        deleteProduct: null
      }
    case PRODUCT_EDIT:
      return {
        ...state,
        editProduct: action.payload
      }
    case PRODUCT_EDIT_SUCCESS:
      return {
        ...state,
        editProduct: null,
        products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
      }
    default:
      return state

  }
}