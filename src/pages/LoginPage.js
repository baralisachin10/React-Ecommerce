import React from 'react'
import {Link} from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <div className="col-md-5 shadow-lg p-5 rounded-4">
                    <h2 className="text-center text-muted mt-2 mb-4">
                        Login From
                    </h2>
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Username</label>
                            <input type="text" class="form-control" id="user_name" placeholder="Enter your username" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Password</label>
                            <input type="password" class="form-control" id="user_password"/>
                        </div>
                        <div className="d-grid mt-4">
                            <button className="btn btn-primary py-2 fs-5" type='submit'>Login</button>
                        </div>
                    </form>
                    <p className="text-center text-primary my-3"><Link to="#"className='text-decoration-none'>Forget password?</Link></p>
                    <hr />
                    <p className="text-center">Don't have an account? <Link to="/register" className='text-decoration-none'>register</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage