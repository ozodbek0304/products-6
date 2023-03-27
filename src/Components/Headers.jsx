import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Headers = () => {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("token");
    toast("Logged Out", { type: "info" });
    navigate("/login")
  }
  return (
    <header className="text-bg-primary py-3 shadow sticky-top">
      <nav className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="text-warning text-decoration-none fs-2">
          Najot Market
        </Link>

        <ul className="list-unstyled align-items-center gap-3 m-0 d-flex">
          <li>
            <Link to="/home" className="btn btn-primary fs-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="btn btn-primary fs-4">
              Products
            </Link>
          </li>
     
          <li>
            <Link to="/login" className="btn btn-primary fs-4">
              Login
            </Link>
          </li>
          <li>
            <button   onClick={handleClick} className="btn btn-primary fs-4">
              LogOut <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers
