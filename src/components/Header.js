import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="container-fluid text-bg-dark">
                <div className="d-flex justify-content-evenly align-items-center py-3">
                    <div className="col-md-2 logo-section">
                        <a className="badge text-bg-danger p-2" href="#">Online-Store</a>
                    </div>
                    <div className="col-md-7">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit" id="search-button">
                                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-end align-items-center ps-5">
                            <div className="col-4">
                                <a href="#" className='text-decoration-none'>
                                    <button className="btn btn-danger d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-right-to-bracket"></i>
                                        Sign in
                                    </button>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="#" className='text-decoration-none'>
                                    <button className="btn btn-danger d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-user-plus"></i>
                                        Sign Up
                                    </button>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="/cart" className='text-decoration-none'>
                                    <button className="btn btn-warning d-flex gap-2 align-items-center">
                                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                                        Cart
                                    </button>
                                </a>
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
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header