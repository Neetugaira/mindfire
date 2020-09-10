import React, { useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

function Header({ isModalOpen, showModal ,isResetModalOpen,currentUser,showResetModal,dispatch}) {
  let [currentUserLocal, setCurrentUserLocal] = useState({})

  useEffect(() => {
    setCurrentUserLocal(JSON.parse(localStorage.getItem('currentUser')))
  }, [])

  let user = typeof currentUser == "string" ? JSON.parse(currentUser) : currentUserLocal;
   function logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('agency');
    window.location = "/";
   }

  return (
    <header>
          <a href="/dashboard" className="navbar-brand">{user?<img src="static/images/top.jpg" width={52} />:""}</a>
          <nav className="nav">
            <div className="trigger">
              <ul>
                {/*  <li>
                  <NavLink to="/dashboard" className="active" tooltip="Dashboard" flow="down">
                    <i className="fa fa-tachometer"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard" className="active" tooltip="Dashboard" flow="down">
                    <i className="fa fa-tachometer"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard" className="active" tooltip="Dashboard" flow="down">
                    <i className="fa fa-tachometer"></i>
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="header-nav">
              <ul className="header-nav">
                <li className="profile-details sub-menu-parent">
                  {user?<span className="profile-text">Hello {user.name}</span>:''}
                  <ul className="sub-menu">
                    <li>
                      <span onClick={()=>{logout()}} className="active" tooltip="Logout" flow="down">
                        <i className="fa fa-sign-out text-aqua" /> Logout
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
    </header>)
}

export default Header;
