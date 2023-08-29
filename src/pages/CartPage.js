import React from 'react'
import CartItem from '../components/CartItem'
import Header from '../components/Header'

const CartPage = () => {
    const cartItems = [
        {
            product_image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
            product_title: "Branded watch",
            product_price: 12000
        },
        {
            product_image: "https://m.media-amazon.com/images/I/31NPT3Db0NL._AC_SY200_.jpg",
            product_title: "Black Earpods",
            product_price: 20000
        },
        {
            product_image: "https://m.media-amazon.com/images/I/41-dSLW1RVL._AC_SY200_.jpg",
            product_title: "Samsung Mobile",
            product_price: 30000
        },
        {
            product_image: "https://m.media-amazon.com/images/I/71JNKFTBSwL._AC_UY218_.jpg",
            product_title: "Hp laptop",
            product_price: 150000
        },

    ]
  return (
    <>
    <Header/>
    <div className="container-fluid">
        <h2 className="text-center text-muted mt-3">
            Your Cart Items
        </h2>
        <div className="d-flex justify-content-around align-items-center mt-5">
            <div className="col-md-8">
                {
                    cartItems.map((cartItem,index)=>{
                        return <CartItem product_image={cartItem.product_image} product_title={cartItem.product_title} product_price={cartItem.product_price} key={index} />
                    })
                }
            </div>
            <div className="col-md-3 shadow-lg p-3">
                <h5 className="text-dark">
                    Cart Summary
                </h5>
                <hr />
                <p>Units: &nbsp; 1</p>
                <p>Total: &nbsp; Rs.&nbsp; 00000</p>
                <hr />
                <button className="btn btn-warning">
                    Checkout
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartPage