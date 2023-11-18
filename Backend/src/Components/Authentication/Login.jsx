import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:2021/admin';

const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const jump = useNavigate()

  console.log(Array);

  const loginUser = async (e) => {
      e.preventDefault();

      const LoginData = { Email, Password }
      console.log(LoginData);
      const response = await fetch(`${baseUrl}/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(LoginData)
      })

      const Data = await response.json()

      if (response.ok) {
        const user = JSON.stringify(Data)
        // console.log(user);
          localStorage.setItem("User",user)
          jump('/')
          window.location.reload();
      }
      if (!response.ok) {
          console.log(Data.error);
      }
  }

  return (
    <div>
      <div className="hero md:my-24 my-4 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginUser} className="card-body">
              <h1 className=' font-bold text-3xl text-center pb-4'>Login</h1>
              <div className="form-control">
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name='password' className="input input-bordered" required />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-accent">Login</button>
              </div>
              <p className='my-1 text-center'>If you have no account you can <br /> <Link to='/sinup' className=' font-bold text-lg underline text-blue-600'>Sinup</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;