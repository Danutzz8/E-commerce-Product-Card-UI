
import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import '../styling/ProductCard.css'; 

const ProductCard = ({ product, addProduct }) => {
  const isOutOfStock = product.inStock === false; // explicitly false means out of stock
  console.log("ProductCard", product);

  return (
    <div id={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
      <div className="card text-center h-100">
        <div className="img-container">
            <img
            className="card-img-top p-3"
            src={product.image}
            alt={product.title}
            height={300}
            />
        </div>
        <div className="card-body">
          <h5 className="card-title text-ellipsis">{product.title}</h5>
          {/* <p className="card-text text-ellipsis-2">{product.description}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead fw-bold">$ {product.price}</li>
        </ul>

        {/* Variant dropdown if exists */}
        {product.variants && (
            <div className="d-flex align-items-center mt-2 px-2">
                <label
                htmlFor={`variant-select-${product.id}`}
                className="form-label me-4 mb-0"
                style={{ whiteSpace: "nowrap" }}
                >
                Variant:
                </label>
                <select
                id={`variant-select-${product.id}`}
                className="form-select p-1"
                aria-label={`Select variant for ${product.title}`}
                style={{ flexGrow: 1 }}
                >
                {product.variants.map((variant, index) => (
                    <option key={index} value={variant}>
                    {variant}
                    </option>
                ))}
                </select>
            </div>
        )}


        <div className="card-body">
          <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
            Buy Now
          </Link>
          {isOutOfStock ? (
            <button className="btn btn-secondary m-1" disabled>
              Out of Stock
            </button>
          ) : (
            <button
              className="btn btn-dark m-1"
              onClick={() => {
                toast.success("Added to cart");
                addProduct(product);
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};



export default ProductCard;
