import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) navigate("/login");

  }, [])
  return (
    <div className='container text-center text-primary py-5'>
      <h1>Hammaga salom!</h1>
      <p className='w-75 m-auto p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, qui molestiae provident error ab obcaecati quas asperiores, autem architecto, numquam quaerat. Eligendi soluta quo iure itaque, sapiente obcaecati reprehenderit. Quas in repellendus modi aliquam eaque totam nobis debitis blanditiis molestiae alias esse, perferendis vitae itaque ullam voluptatum? Aperiam, omnis nam?</p>
   </div>
  )
}

export default Home
