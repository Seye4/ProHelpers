import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

// import Modal from './Modal'

const Option = ({ item, productId }) => {
  let newAmount = 1;
  let newPrice = item.amount[0].price;
  const dialogRef = useRef(null);

  const [dialogContent, setDialogContent] = useState(null);

  // const [price, setPrice] = useState(item.amount[0].price);
  // const [amt, setAmount] = useState(item.amount[0].amount);
  const [amtLabel, setAmountLabel] = useState(item.amount[0].quantity);

  // console.log(item);

  const [productInfo, setProductInfo] = useState({
    price: item.amount[0].price,
    amt: item.amount[0].amount,
    productId,
  });

  const carts = useSelector((state) => state.cart.items);
  // console.log(carts);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        product: {
          cartID: productId + newAmount.toString(),
          productID: productId,
          image: item.img,
          name: item.name,
          slug: item.slug,
          price:
            item.amount.length > 1 && newAmount == 1
              ? item.amount[0].price
              : newPrice,
          amount:
            item.amount.length > 1 && newAmount == 1
              ? item.amount[0].amount
              : newAmount,
          amountLabel: amtLabel,
          amountData: item.amount,
        },
      })
    );
  };

  const handleMinusQuantity = () => {
    newAmount = newAmount - 1 < 1 ? 1 : newAmount - 1;
    newPrice = item.amount[0].price * newAmount;
  };

  const handlePlusQuantity = () => {
    // setAmount(prev => prev = amt + 1)
    newAmount += 1;
    newPrice = item.amount[0].price * newAmount;
    // setAmount((currentState) => {
    //   newAmount = currentState + 1;
    //   setPrice(item.amount[0].price * newState);

    //   return newState;
    // });
  };

  const handleAmount = (e) => {
    newPrice = item.amount[e.target.selectedIndex].price;
    newAmount = item.amount[e.target.selectedIndex].amount;

    // amountLabel = item.amount[e.target.selectedIndex].quantity
  };

  const toggleModal = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.show();
  };

  return (
    <>
      <div className="amount-select">
        <div>
          {item.amount.length == 1 ? (
            <div className="btn-quantity">
              <button className="adjust-btn" onClick={handleMinusQuantity}>
                -
              </button>
              <span className="amount-Value">{newAmount}</span>
              <button onClick={handlePlusQuantity}>+</button>
            </div>
          ) : (
            <select onChange={handleAmount}>
              {item.amount.map((item) => (
                <option key={item.quantity} defaultValue={item.quantity}>
                  {item.quantity}
                </option>
              ))}
            </select>
          )}
          {/* <span className='select-label'></span> */}
        </div>
        <h4> €{newPrice} </h4>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        in den Einkaufswagen
      </button>
    </>
  );
};

export default Option;
