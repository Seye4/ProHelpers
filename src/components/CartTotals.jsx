import React from 'react'
import { useSelector } from 'react-redux'

const CartTotals = () => {

    const { cartTotal, shipping, tax, orderTotal} = useSelector((state) => state.cartState)
    
  return (
    <div className="cart-card">
        <div className="card-body">
            <p>
                <span> subtotal </span>
                <span> {cartTotal} </span>
            </p>
            <p>
                <span> shipping </span>
                <span> {shipping} </span>
            </p>
            <p>
                <span> tax </span>
                <span> {tax} </span>
            </p>
            <p>
                <span> order total </span>
                <span> {orderTotal} </span>
            </p>
        </div>      
    </div>
  )
}

export default CartTotals