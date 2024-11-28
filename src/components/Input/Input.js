import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Input.scss";
import search from "../../assets/search-input-button.svg";
export const Input = ({ isNext = false }) => {
    return (_jsxs("div", { className: isNext ? "input" : "input input-rakuten", children: [_jsx("input", { placeholder: isNext ? "Search product or brand" : "Que cherchez-vous?", className: isNext ? "input__search" : "input-rakuten__search" }), _jsx("button", { className: isNext ? "input__button" : "input-rakuten__button", children: _jsx("img", { src: search, alt: "search", className: isNext ? "input__icon" : "input-rakuten__icon" }) })] }));
};
