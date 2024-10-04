import { useState } from 'react';
import { Form } from 'react-router-dom'
import { generateAmt } from '../utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ServiceCardInfo = ({data}) => {

    // console.log(data);
    const [price, setPrice] = useState(0)
    const [amt, setAmount] = useState(0)

    const handleAmount =(e) => {
        setPrice(data.amount[e.target.selectedIndex - 1].productCost)
        setAmount(data.amount[e.target.selectedIndex - 1].amount)
    }

    const cartProduct = {
        cartID : data.productId + amt.toString(),
        productID : data.productId,
        image: data.productImg,
        title: data.productName,
        price: price,
        amount: amt
    }
    
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem({product: cartProduct}))
    }

  return (
    <div className="product-card">
         <img className='product-img' src={data.productImg} alt="" />
       <div className='product-card-info'>
            <h3>{data.productName}</h3>
            <p> {data.info} </p>
            
            <div className='cart-form'>
                <div>
                    <label htmlFor="amount">
                        <h4>Amount</h4>
                    </label>
                    <select className='product-select' id="amount" value={data.amount.Quantity} onChange={handleAmount} defaultValue={data.amount.Quantity} >
                        <option type="others" >Select Amount </option>
                        {
                            data.amount?.length > 0 && data.amount.map(
                                item => {
                                    return (<option key={item.Quantity} defaultValue={item.Quantity} >{item.Quantity}</option>)
                                }
                            )
                        }
                    </select>
                    
                </div> 
                <div className='add-to-cart'>
                    <h4>{price}</h4> 
                    <button onClick={addToCart}> <p>Add to cart</p> <img src="/img/cart.svg" alt="" /> </button>
                </div>                           
            </div>
        </div>
    </div>
  )
}

export default ServiceCardInfo