import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/Input";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: orderTotal,
      cartItems,
      numItemsInCart,
    };

    try {
      // const response = await customFetch.post('/orders', {data: info}, headers: {
      //  Authorization: `Bearer ${user.token
      // }
      // })

      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);

      if (error.response.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form className="checkout-form" method="POST">
      <h4>Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="submit-session">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
