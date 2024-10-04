import "../pages/css/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import closeBtn from "../assets/icons/btn-close.svg";
import cart from "../assets/icons/cart.svg";
import navBar from "../assets/icons/navBar.png";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";
import { useState } from "react";

const NavBar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const [isActive, setIsActive] = useState(true);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <NavLink to="/">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>

          <NavLinks clickTest={setIsActive} />

          <Link to="/cart" className="nav-cart">
            <img src={cart} alt="" />
            <div className="cart-count">
              <span>{numItemsInCart}</span>
            </div>
          </Link>

          <NavLink to="/booking" className="btn-navBar">
            Angebot Einholen
          </NavLink>

          <button className="navBar" onClick={toggleActiveClass}>
            <img src={navBar} alt="" />
          </button>
        </div>
      </nav>
      <aside className={`${isActive ? "sideBar" : "sideBar show-sideBar"}`}>
        <div>
          <button className="close-btn" id="close-btn" onClick={setIsActive}>
            <img src={closeBtn} alt="" />
          </button>

          <NavLinks />
        </div>
      </aside>
    </>
  );
};

export default NavBar;
