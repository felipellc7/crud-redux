import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from './../actions/productActions'

const NewProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch()
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  const addProduct = product => dispatch(createNewProductAction(product))

  const submitNewProduct = e => {
    e.preventDefault()
    if(name.trim() === '' || price <= 0) {
      return
    }

    // ---
    addProduct({
      name,
      price
    })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Add Product</h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="input"
                  className="form-control"
                  placeholder="Product Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Product Price"
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Add Product</button>
            </form>
            {loading ? <p>Loading...</p> : null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Something went wrong!</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NewProduct;