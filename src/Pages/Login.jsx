import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
   const[values, setValues]= useState({email:"",password:""})

  const navigate = useNavigate();
  useEffect(()=>{
    let token = localStorage.getItem("token");

    if(token) navigate("/home");
  },[])

  async function handleLogin(e) {
    e.preventDefault();
    try {
      
      let res = await axios.post("https://reqres.in/api/login", values);

      if (res.status===200 ) {
        toast("Logged success", { type: "success" });
        localStorage.setItem("token", res.data.token);
        navigate("/home")
      } 
    } catch (error) {
      toast(error.response.data.error, {
        type: "error",
      });
    } finally {
        setValues({ email: "", password: "" });
    } 
  }

  function handlechangeinput(e) {
    setValues(ov => ({ ...ov, [e.target.name]: e.target.value }));
  }
  return (
    <div className="container d-flex  align-items-center justify-content-center bg-text-light  min-vh-100">
      <form className="shadow bg-wihte w-50 p-3 rounded">
        <h1 className="text-center display-3 text-primary">Login</h1>
        <div className="mb-3">
          <label className="label-control" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Your Email"
            required
            value={values.email}
            onChange={handlechangeinput}
           />
        </div>
        <div className="mb-3">
          <label className="label-control" htmlFor="password">
            Your Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Your Password"
            required={4}
            value={values.password}
            onChange={handlechangeinput}
          />
        </div>
        <button disabled={!values.email||values.password.length<4} onClick={handleLogin} className="btn btn-success d-block w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login
