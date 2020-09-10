import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import request from '../../utils/request';
import {toast} from 'react-toastify';

function Login({history}) {
  let [loginData, setLoginData] = useState({email: '',password: ''})
  const handelChange = event => setLoginData({ ...loginData, [event.target.name]: event.target.value })
  const submit = () => {
    request('POST', '/auth/login?email='+loginData.email+'&password='+loginData.password, loginData).then((result) => {
        let currentUser = result.data.user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location = "/dashboard";
          toast.success("Successful login");
    }).catch((e) => {
      toast.error("There some error in login");
    })
  }
  return (
    <>
    <div className="login log-screen">
      <div>
        <div className="log-in">
          <div className="card-header">Login</div>
          <label htmlFor="username">Email ID</label>
          <input type="text" name="email" onChange={handelChange} />
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" onChange={handelChange} name="password" />
          <button type="submit" onClick={submit}>Login</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default Login;
