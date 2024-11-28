import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./NextHeader.scss";
import { Input } from "../Input";
import { NEXT_HEADER_BUTTONS } from "../../constants/next-header-buttons";
import profileIcon from "../../assets/next_account.svg";
import logo from "../../assets/next-logo.svg";
import search from "../../assets/search-input-button.svg";
import favourites from "../../assets/favourites.svg";
import shopping from "../../assets/shopping-bag.svg";
import country from "../../assets/ital.png";
export const NextHeader = ({ isVisible }) => {
    return (_jsxs("header", { className: isVisible ? "header" : "header header--transparent", children: [_jsx("div", { className: "header__top", children: _jsx("p", { className: "header__special", children: "\u20AC2 Home delivery within 1-2 days | Free collection from store" }) }), _jsxs("div", { className: "header__middle", children: [_jsxs("div", { className: "header__middle-container", children: [_jsx("a", { style: { color: "white" }, href: "#", children: _jsx("img", { src: logo, alt: "logo", className: "header__logo" }) }), _jsx(Input, { isNext: true })] }), _jsxs("div", { className: "header__menu", children: [_jsx("button", { className: "header__button", children: _jsx("img", { src: search, alt: "search", className: "header__icon" }) }), _jsxs("button", { className: "header__button header__button--account", children: [_jsx("span", { className: "header__account", children: "My account" }), _jsx("img", { src: profileIcon, alt: "profile", className: "header__icon" })] }), _jsx("button", { className: "header__button", children: _jsx("img", { src: favourites, alt: "favourites", className: "header__icon" }) }), _jsxs("button", { className: "header__button", children: [_jsx("img", { src: shopping, alt: "shopping bag", className: "header__icon" }), _jsx("p", { className: "header__icon-quantity", children: "0" })] }), _jsx("button", { className: "header__checkout", children: "CHECKOUT" }), _jsx("button", { className: "header__button", children: _jsx("img", { src: country, alt: "country", className: "header__icon header__icon--no-filter" }) })] })] }), _jsx("div", { className: "header__bottom", children: NEXT_HEADER_BUTTONS.map((button) => (_jsx("button", { className: "header__nav", children: button }))) })] }));
};
