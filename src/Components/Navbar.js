import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

function Navbar(props) {

    const [isChecked, setIsChecked] = useState(false);

    const handleThemeBtnInputClick = (event) => {                   /// IMPLEMENT PROPERLY !!!
        setIsChecked(event.target.checked);
        const element = document.getElementById('mainBody');
        if (element.getAttribute('data-bs-theme')==='light') {
            element.someProperty = 'data-bs-theme="dark"';
        }
        else{
            element.someProperty = 'data-bs-theme="light"';
        }
    };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="logo512.png" width={55} style={{paddingRight:15}} alt="Notes" />
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">{props.link1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.link2}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.dropdown1}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">{props.dropdownlink1}</a></li>
                  <li><a className="dropdown-item" href="/">{props.dropdownlink2}</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">{props.dropdownlink3}</a></li>
                </ul>
              </li>
            </ul>
            <div className="toggle-switch">
              <label className="switch-label">
                <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleThemeBtnInputClick} id='themeBtnInput' />
                <span className="slider"></span>
              </label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">{props.search}</button>
            </form>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    link1 : PropTypes.string,
    link2 : PropTypes.string,
    dropdown1 : PropTypes.string,
    dropdownlink1 : PropTypes.string,
    dropdownlink2 : PropTypes.string,
    dropdownlink3 : PropTypes.string,
    search : PropTypes.string
}

Navbar.defaultProps = {
    title: "Title",
    link1 : "link1",
    link2 : "link2",
    dropdown1 : "dropdown1",
    dropdownlink1 : "dropdownlink1",
    dropdownlink2 : "dropdownlink2",
    dropdownlink3 : "dropdownlink3",
    search : "Search"
}

export default Navbar;