import "../pages/css/cart.css";
import { useSelector } from "react-redux";
import { CartTotals, CartItemList, SectionTitle } from "../components/Input";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text1="Ihr Warenkorb ist leer" />;
  }

  return (
    <div className="section">
      <h1> Shopping Cart</h1>
      <div className="cart-page">
        <div className="cart-items">
          <CartItemList />
        </div>
        <div className="cart-totals">
          <CartTotals />
          {user ? (
            <Link className="cart-link" to="/checkout">
              {" "}
              proceed to checkout
            </Link>
          ) : (
            <Link className="cart-link" to="/login">
              {" "}
              please login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
