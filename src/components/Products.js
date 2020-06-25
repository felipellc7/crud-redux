import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from './../actions/productActions'
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch()
  // const loading = useSelector(state => state.products.loading)

  useEffect(() => {
    const loadProducts = () => dispatch(getProductsAction())
    loadProducts()
  }, [])

  const products = useSelector(state => state.products.products)
  console.log('products', products)


  return (  
    <>
      <h2 className="text-center my-5">Product List</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody> 
          {products.length === 0 ? "There aren't products!" : (
            products.map(product => {
              return (
                <Product
                  key={product.id}
                  product={product}
                />
              )
            })
          )}
        </tbody>
      </table>
    </>
  );
}
 
export default Products;