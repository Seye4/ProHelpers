import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  ContactUs,
  Services,
  Service,
  SinglePageError,
  Booking,
  Cart,
  Checkout,
  Login,
  Orders,
  Register,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleServiceLoader } from "./pages/Service";
import { loader as servicesLoader } from "./pages/Services";
import { loader as checkOutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import SingleProduct from "./pages/SingleProduct";
import { store } from "./store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service/:id",
        errorElement: <SinglePageError />,
        loader: singleServiceLoader(queryClient),
        element: <Service />,
      },
      {
        path: "contact",
        errorElement: <SinglePageError />,
        element: <ContactUs />,
      },
      {
        path: "services",
        errorElement: <SinglePageError />,
        element: <Services />,
        loader: servicesLoader(queryClient),
      },
      {
        path: "booking",
        errorElement: <SinglePageError />,
        element: <Booking />,
      },
      {
        path: "cart",
        errorElement: <SinglePageError />,
        element: <Cart />,
      },
      {
        path: "product/:id",
        errorElement: <SinglePageError />,
        element: <SingleProduct />,
        // loader: singleProductLoader,
      },
      {
        path: "checkout",
        errorElement: <SinglePageError />,
        element: <Checkout />,
        loader: checkOutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        errorElement: <SinglePageError />,
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
    ],
  },
  {
    path: "/login",
    errorElement: <SinglePageError />,
    element: <Login />,
    action: loginAction(store),
  },
  {
    path: "/register",
    errorElement: <SinglePageError />,
    element: <Register />,
    action: registerAction,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
