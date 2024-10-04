import "../pages/css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className="header">
      <div className="header-content">
        {user ? (
          <div className="user-welcome">
            <p>
              Hello, <span> {user.name} </span>{" "}
            </p>
            <button onClick={handleLogout}>Ausloggen</button>
          </div>
        ) : (
          <div className="header-links">
            <Link to="/login" className="">
              Anmelden / Gastbenutzer
            </Link>
            <Link to="/register" className="">
              Registrieren
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
