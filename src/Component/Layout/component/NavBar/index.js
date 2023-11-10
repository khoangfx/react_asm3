import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { ON_LOGOUT } from "../../../redux/actions";
import nav from "./App.module.css";

function NavBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // get data on local
    const getData = (key) => {
      return JSON.parse(localStorage.getItem(key));
    };
    const data = getData("user");
    data === null ? setName("") : setName(data.name);
    // setName("");
  }, []);

  const handleClickLogout = () => {
    dispatch(ON_LOGOUT({ email: "", password: "" }));
    setName("");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className={nav.navBar}>
        <nav>
          <ul className=" row">
            <li className={nav.home}>
              <Link to="/">Home</Link>
            </li>
            <li className={nav.pages}>
              <Link to="/Shop">Shop</Link>
            </li>
            <li className={nav.boutique}>Boutique</li>
            <li className={nav.pages}>
              <Link to="/Cart">
                <i className="fa fa-cart-arrow-down " aria-hidden="true"></i>{" "}
                Cart
              </Link>
            </li>
            <li className={nav.pages}>
              {name === "" ? (
                <Link to="/Login">
                  <i className="fa fa-user " aria-hidden="true"></i> Login
                </Link>
              ) : (
                <Link to="/Login">
                  <i className="fa fa-user " aria-hidden="true"></i>
                  <span onClick={handleClickLogout}>{name + " (Logout)"}</span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
