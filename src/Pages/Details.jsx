import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const [producte, producteRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => producteRender(json));
  }, []);

  return (
    <div>
      <div className="container mt-5 border border-5 py-5">
        <div className="d-flex justify-content-around py-5">
          <img src={producte.image} className="w-25" alt="rasm" />
          <div className="w-50">
            <h2 className="fs-2">Tittle: {producte.title}</h2>
            <p className="fs-3">
              <span className="des-span">Price:</span> {producte.price}$
            </p>
            <p className="fs-3">
              <span className="des-span">Categoria:</span> {producte.category}
            </p>
          </div>
        </div>
        <p className="fs-5">
          <span className="des-span">Description:</span> {producte.description}
        </p>
      </div>
    </div>
  );
};
export default Details;
