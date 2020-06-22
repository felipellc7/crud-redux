import React from 'react';

const NewProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Add Product</h2>
            <form>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="input"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Product Price"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NewProduct;