import React, { useState } from 'react'

const CartItem = (props) => {
    let [increment, setIncrement] = useState(1)

    const incrementController=()=>{
        setIncrement(++increment);
    }

    const decrementController=()=>{
        setIncrement(--increment);
    }
    return (
        <>
            <div className="d-flex align-items-center shadow-lg p-3 rounded-3">
                <div className="col-md-3">
                    <img src={props.product_image} alt="watch-image" width='130px' />
                </div>
                <div className="col-md-3">
                    {props.product_title}
                </div>
                <div className="col-md-2 text-warning">
                    Rs&nbsp; {props.product_price}
                </div>
                <div className="col-md-3 d-flex">
                    <div className="col-md-4">

                        <button className="btn btn-danger" onClick={decrementController}>-</button>&nbsp;&nbsp;
                    </div>
                    <div className="col-md-4">
                        <p>{increment}</p>
                    </div>
                    <div className="col-md-4">

                        <button className="btn btn-primary" onClick={incrementController}>+</button>
                    </div>
                </div>
                <div className="col-md-1 px-3">
                    <button className="btn btn-danger p-2">
                        <i class="fa-solid fa-trash text-white" style={{ fontSize: '25px' }}></i>
                    </button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem