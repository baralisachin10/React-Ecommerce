import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='position-sticky top-0 z-1'>
            <div className="container-fluid text-bg-dark">
                <div className="d-flex justify-content-evenly align-items-center py-3">
                    <div className="col-sm-12 col-md-2 logo-section">
                        <Link className="badge text-bg-danger p-2" to="/">Online-Store</Link>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit" id="search-button">
                                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className="d-flex justify-content-end align-items-center ps-5">
                            <div className="col-4">
                                <Link to="/login" className='text-decoration-none'>
                                    <button className="btn btn-danger d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-right-to-bracket"></i>
                                        Sign in
                                    </button>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/register" className='text-decoration-none'>
                                    <button className="btn btn-danger d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-user-plus"></i>
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/cart" className='text-decoration-none'>
                                    <button className="btn btn-warning d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                                        Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header