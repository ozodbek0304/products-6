import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {
  const [count, setCount] = useState(0);

  function handleclickplus(e) {
    e.preventDefault();
    setCount(count +1);
    console.log(setCount);
  }
  

  function handleclickminus(e) {
    e.preventDefault();
    setCount(count -1);
    console.log(setCount);
  }
  
  return (
    <>
      <div className="d-flex justify-content-center pt-5 gap-3 container">
        <button onClick={handleclickminus}   className="btn btn-primary d-block w-25">Ayirish</button>
        <span className='fs-2'>{count}</span>
        <button onClick={handleclickplus} className="btn btn-success d-block w-25 ">
          Qo'shish
        </button>
      </div>
      <div className="row g-3 py-5">
        {products.map((product, index) => (
          <div className="col-md-6 col-lg-3 " key={index}>
            <div className="card" aria-hidden="true">
              <img
                src={product.image}
                alt={product.title}
                className="placeholder-card-image d-flex align-items-center justify-content-center  card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title placeholder-glow text-truncate">
                  {product.title}
                </h5>
                <div className="card-text">
                  <span className="d-flex justify-content-between">
                    <span>
                      <i className="text-warning fa-solid fa-sack-dollar"></i>
                      {product.price}
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-warning"></i>
                      {product.rating.rate} / {product.rating.count}
                    </span>
                  </span>
                  <p className="description">{product.description}</p>
                </div>
                <div className="d-flex gap-2">
                  <Link
                    href="#"
                    tabIndex="-1"
                    to={`/products/${product.id}`}
                    className="btn btn-primary   col-6"
                  >
                    Read More...
                  </Link>
                  <Link
                    href="#"
                    tabIndex="-1"
                    className="btn btn-success  col-6"
                  >
                    Text Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsList
