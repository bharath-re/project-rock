import React from "react";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue(); // Access global state

  return (
    <header>
      <div className="left-bar">
        <Link to="/">
          <div className="shop__logo">
            <StoreIcon />
          </div>
        </Link>
        <div className="shop__name">Amazon-Copy</div>
      </div>
      <div className="search-bar">
        <input className="search-input" placeholder="Search ....."></input>
        <button>
          <SearchIcon />
        </button>
      </div>

      <div className="header-nav">
        <div>
          <span className="hello-guest"> Hello guest</span>
          <span className="sign-in"> Sign in </span>
        </div>
        <div className="your-shop">
          <span className="your-shop1"> Your </span>
          <span className="your-shop2"> Shop </span>
        </div>

        <div className="your-carting">
          <span className="your-cart">
            <Link to="/checkout">
              <ShoppingCartIcon />
              {/* Display basket count */}
              <span className="cart-count"> {basket?.length || 0} </span>
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
