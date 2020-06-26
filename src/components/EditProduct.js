import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from './../actions/productActions'
import { useHistory } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: ''
  })
  const {name, price} = product
  const dispatch = useDispatch()
  const editProduct = useSelector(state => state.products.editProduct)
  const history = useHistory()
  
  useEffect(() => {
    if(editProduct) {
      setProduct(editProduct)
    }
  }, [editProduct])

  const onChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }
  
  const submitEdit = e => {
    e.preventDefault()
    dispatch(editProductAction(product))
    history.push(`/`)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
            <form onSubmit={submitEdit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="input"
                  name="name"
                  className="form-control"
                  placeholder="Product Name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  min="0"
                  name="price"
                  className="form-control"
                  placeholder="Product Price"
                  value={price}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Apply Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EditProduct;