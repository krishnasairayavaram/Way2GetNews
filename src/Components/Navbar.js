import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({setPageSize,isInfiniteScroll,setIsInfiniteScroll}) => {
  const handleChange=(e)=>{
    const value=parseInt(e.target.value);
    if(!isNaN(value) && value>0){
      setPageSize(value);
    }
  }
  const handleToggle = () => {
    setIsInfiniteScroll((prev) => !prev);
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor: '#f9f5e3', borderBottom: '2px solid #ccc'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Way2GetNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="checkNativeSwitch" checked={isInfiniteScroll}
              onChange={handleToggle} />
            <label className="form-check-label" htmlFor="checkNativeSwitch">
              Enable infinite Scroll
            </label>
          </div>
          <div style={{marginLeft:'20px'}}><input disabled={isInfiniteScroll} className="form-control" style={{ width: '160px' }} onChange={handleChange} type="number" min="1" placeholder="Articles per page"></input></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
