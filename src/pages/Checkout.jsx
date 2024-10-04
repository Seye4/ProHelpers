import "../pages/css/Checkout.css";
import { useSelector } from "react-redux";
import { CheckoutForm, CartTotals, SectionTitle } from "../components/Input";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text1="Ihr Warenkorb ist leer" />;
  }

  return (
    <div className="section">
      <SectionTitle text1={"Place your Order"} text2={""} />
      <div className="checkout">
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
};

export default Checkout;
