import { useDispatch } from "react-redux";
import { removeItem, editItem, editItem2 } from "../features/cart/cartSlice";
import { products } from "../../public/db/product";

const CartItem = ({ cartItem }) => {
  // console.log(cartItem);

  const { cartID, name, price, image, amount, amountData, amountLabel } =
    cartItem;

  const handleMinusQuantity = () => {
    const newAmount = amount - 1 < 1 ? 1 : amount - 1;
    // amount = newAmount;

    // const newPrice = amountData[0].price * amount;

    dispatch(
      editItem({ cartID, amount: newAmount, price: -amountData[0].price })
    );
  };

  const handlePlusQuantity = () => {
    const newAmount = amount + 1;
    // const newPrice = amountData[0].price * newAmount;

    dispatch(
      editItem({ cartID, amount: newAmount, price: amountData[0].price })
    );
  };

  const handleCartAmount = (e) => {
    // const temp = itemAmt
    let cot = e.target.selectedIndex - 1;
    // setPrice((prev) => (prev = amountData[cot].price));
    // setAmount((prev) => (prev = amountData[cot].amount));

    // let newPrice

    // (temp > amountData[cot].amount ) ? (newPrice = -amountData[cot].price) : (newPrice = amountData[cot].price)

    dispatch(
      editItem2({
        cartID,
        amount: amountData[cot].amount,
        price: amountData[cot].price,
      })
    );
  };

  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const Cart = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article className="cartItem" key={cartID}>
      <img src={image} alt="" />
      <div className="cartItem-info">
        <h3>{name}</h3>
        <div className="amount-form">
          <label htmlFor="amount">
            <h4>Amount</h4>
          </label>
          {amountData.length == 1 ? (
            <div className="btn-quantity">
              <button onClick={handleMinusQuantity}>-</button>
              <span>{amount}</span>
              <button onClick={handlePlusQuantity}>+</button>
            </div>
          ) : (
            <select onChange={handleCartAmount}>
              <option>{amountLabel}</option>
              {amountData.map((item) => (
                <option key={item.quantity} defaultValue={item.quantity}>
                  {item.quantity}
                </option>
              ))}
            </select>
          )}
          {/* <select className='product-select' id="amount" value={data.amount.Quantity} onChange={handleAmount} defaultValue={data.amount.Quantity} >
                        <option type="others" >Select Amount </option>
                        {
                            data.amount?.length > 0 && data.amount.map(
                                item => {
                                    return (<option key={item.Quantity} defaultValue={item.Quantity} >{item.Quantity}</option>)
                                }
                            )
                        }
                    </select> */}
        </div>

        <p className="cartItem-price">
          <span>€</span> {price}
        </p>
        <button className="remove" onClick={removeItemFromTheCart}>
          remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
