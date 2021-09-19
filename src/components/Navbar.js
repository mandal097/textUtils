import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
            <span className="navbar-hrefggler-icon"></span>
          </buthrefn>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about" >{props.aboutText}</Link>
              </li>
            </ul>

          </div>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: "20px", width: "20px", cursor: 'pointer' }}></div>
            <div className="bg-secondary rounded mx-2" onClick={() => { props.toggleMode('secondary') }} style={{ height: "20px", width: "20px", cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: "20px", width: "20px", cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: "20px", width: "20px", cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: "20px", width: "20px", cursor: 'pointer' }}></div>
          </div>


          <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : 'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => { props.toggleMode() }} />
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{props.toggleMode}</label>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string

};

Navbar.defaultProps = {
  title: "textUtils",
  aboutText: "about us"
}