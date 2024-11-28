import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./NextFooter.scss";
import profileIcon from "../../assets/profile.svg";
import { NextFooterNetworks } from "../NextFooterNetworks";
import { FOOTER_MENU } from "../../constants/next-footer-menu";
import chevron from "../../assets/chevron.svg";
import arrowTop from "../../assets/arrow-top.svg";
export const NextFooter = ({ isVisible, scrollToTop, }) => {
    return (_jsxs("footer", { className: isVisible ? "footer" : "footer footer--transparent", children: [_jsx("button", { className: "scroll-to-top", onClick: scrollToTop, children: _jsx("img", { src: arrowTop, alt: "Scroll to Top" }) }), _jsx(NextFooterNetworks, {}), _jsxs("section", { className: "footer__account", children: [_jsx("img", { src: profileIcon, alt: "facebook", className: "footer__account-icon" }), _jsxs("div", { className: "footer__account-container", children: [_jsx("a", { href: "#", className: "footer__account-title", children: "My Account" }), _jsx("a", { href: "#", className: "footer__account-subtitle", children: "Sign-in to your account" })] })] }), _jsx("section", { className: "footer__menu", children: FOOTER_MENU.map((column) => (_jsxs("div", { className: "footer__column", children: [_jsx("img", { src: chevron, alt: "chevron", className: "footer__column-icon" }), _jsx("p", { className: "footer__column-title", children: column.title }), column.buttons.map((button) => (_jsx("a", { className: "footer__link", href: "#", children: button }, button)))] }, column.title))) }), _jsxs("section", { className: "footer__bottom", children: [_jsx("a", { className: "footer__mobile", children: "View mobile site" }), _jsx("p", { className: "footer__text", children: "\u00A9 2024 Next Retail Ltd. All rights reserved." })] })] }));
};
