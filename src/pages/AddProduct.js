import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";

import { addProduct, listProducts } from "../appRedux/action/productActions";

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");

  const productAdd = useSelector((state) => state.productAdd);
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  console.log(loading);
  console.log(products);
  const { loading: loadingAdd, error: errorAdd } = productAdd;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        name,
        price,
        brand,
        image,
        category,
        description,
        countInStock,
      })
    );
  };
  return (
    <section className="hero is-fullheight">
      {loadingAdd && <div>Loading..</div>}
      {errorAdd && <div>{errorAdd}</div>}
      {loading && <div>Loading..</div>}
      {error && <div>{error}</div>}
      <div className="hero-body">
        <div className="container">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products !== undefined &&
                  products.map((product, i) => {
                    return (
                      <tr key={i}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>
                          <button className="button">Action</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={submitHandler}>
                    <div className="field">
                      <label className="label" htmlFor="name">
                        Product Name
                      </label>
                      <div className="control">
                        <input
                          required
                          value={name}
                          className="input"
                          name="name"
                          type="text"
                          placeholder="Product Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="price">
                        Price
                      </label>
                      <div className="control">
                        <input
                          required
                          value={price}
                          className="input"
                          name="price"
                          type="number"
                          placeholder="Price"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="brand">
                        Brand
                      </label>
                      <div className="control">
                        <input
                          required
                          value={brand}
                          className="input"
                          name="price"
                          type="text"
                          placeholder="Brand"
                          onChange={(e) => setBrand(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="image">
                        Image
                      </label>
                      <div className="control">
                        <input
                          required
                          value={image}
                          className="input"
                          name="image"
                          type="text"
                          placeholder="Image"
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="category">
                        Category
                      </label>
                      <div className="control">
                        <input
                          required
                          value={category}
                          className="input"
                          name="category"
                          type="text"
                          placeholder="Category"
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="description">
                        Description
                      </label>
                      <div className="control">
                        <input
                          required
                          value={description}
                          className="input"
                          name="description"
                          type="text"
                          placeholder="Description"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="countInStock">
                        Count In Stock
                      </label>
                      <div className="control">
                        <input
                          required
                          value={countInStock}
                          className="input"
                          name="countInStock"
                          type="number"
                          placeholder="Count In Stock"
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                    </div>
                    <button className="button  is-primary is-light is-fullwidth">
                      Add Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AddProduct.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};
export default AddProduct;
