import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Heim" },
  { id: 2, url: "about", text: "Über uns" },
  { id: 3, url: "services", text: "Service" },
  { id: 4, url: "contact", text: "Kontakt" },
  // { id: 5, url: 'jobs', text: 'Arbeit'},
  { id: 5, url: "cart", text: "cart" },
  { id: 6, url: "checkout", text: "checkout" },
  // { id: 7, url: "orders", text: "orders" },
];

const NavLinks = ({ setIsActive }) => {
  const user = useSelector((state) => state.userState.user);

  return (
    <ul className="nav-links">
      {links.map((link) => {
        const { id, url, text } = link;

        if ((url === "checkout" || url === "orders") && !user) return null;

        return (
          <li className="nav-link" key={id}>
            <NavLink to={url} className="" onClick={() => setIsActive(true)}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
