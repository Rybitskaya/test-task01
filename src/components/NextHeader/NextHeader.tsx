import React from "react";
import "./NextHeader.scss";
import { Input } from "../Input";
import { NEXT_HEADER_BUTTONS } from "../../constants/next-header-buttons";
import profileIcon from "../../assets/next_account.svg";
import logo from "../../assets/next-logo.svg";
import search from "../../assets/search-input-button.svg";
import favourites from "../../assets/favourites.svg";
import shopping from "../../assets/shopping-bag.svg";
import country from "../../assets/ital.png";

type Props = {
  isVisible: boolean;
};

export const NextHeader: React.FC<Props> = ({ isVisible }) => {
  return (
    <header className={isVisible ? "header" : "header header--transparent"}>
      <div className="header__top">
        <p className="header__special">
          €2 Home delivery within 1-2 days | Free collection from store
        </p>
      </div>
      <div className="header__middle">
        <div className="header__middle-container">
          <a style={{ color: "white" }} href="#">
            <img src={logo} alt="logo" className="header__logo" />
          </a>
          <Input isNext={true} />
        </div>
        <div className="header__menu">
          <button className="header__button">
            <img src={search} alt="search" className="header__icon" />
          </button>
          <button className="header__button header__button--account">
            <span className="header__account">My account</span>
            <img src={profileIcon} alt="profile" className="header__icon" />
          </button>
          <button className="header__button">
            <img src={favourites} alt="favourites" className="header__icon" />
          </button>
          <button className="header__button">
            <img src={shopping} alt="shopping bag" className="header__icon" />
            <p className="header__icon-quantity">0</p>
          </button>
          <button className="header__checkout">CHECKOUT</button>
          <button className="header__button">
            <img
              src={country}
              alt="country"
              className="header__icon header__icon--no-filter"
            />
          </button>
        </div>
      </div>
      <div className="header__bottom">
        {NEXT_HEADER_BUTTONS.map((button) => (
          <button className="header__nav">{button}</button>
        ))}
      </div>
    </header>
  );
};
