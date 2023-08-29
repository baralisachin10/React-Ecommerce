import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <div className="col-md-5 shadow-lg p-5 rounded-4">
                    <h2 className="text-center text-muted mt-2 mb-4">
                        Register
                    </h2>
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Firstname</label>
                            <input type="text" class="form-control" id="user_name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Lastname</label>
                            <input type="text" class="form-control" id="user_name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Email</label>
                            <input type="email" class="form-control" id="user_name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Password</label>
                            <input type="password" class="form-control" id="user_password"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-3">Confirm Password</label>
                            <input type="password" class="form-control" id="user_password"/>
                        </div>
                        <div className="d-grid mt-4">
                            <button className="btn btn-primary py-2 fs-5" type='submit'>Sign Up</button>
                        </div>
                    </form>
                    <hr />
                    <p className="text-center">Already have an account? <Link to="/login" className='text-decoration-none'>Login</Link> </p>
                </div>
            </div>
        </div>
  )
}

export default RegisterPage