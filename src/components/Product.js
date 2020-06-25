import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductsAction } from './../actions/productActions'

const Product = ({product}) => {
  const dispatch = useDispatch()

  const confirmDelete = id => {
    dispatch(deleteProductsAction(id))
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td><span className="font-weight-bold">$ {product.price}</span></td>
      <td className="acciones">
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-primary mr-2"
        >Edit</Link>
        <button type="button" className="btn btn-danger" onClick={() => confirmDelete(product.id)}>Delete</button>
      </td>
    </tr>
  );
}
 
export default Product;