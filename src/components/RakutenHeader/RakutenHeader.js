import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./RakutenHeader.scss";
import paypal from "../../assets/paypalIcon.svg";
import logo from "../../assets/rakuten-logo6.svg";
import blackweek from "../../assets/blackweek.svg";
import { Input } from "../Input";
import { RAK_HEADER_BUTTONS, RAK_HEADER_BUTTONS_THREE, RAK_HEADER_BUTTONS_TWO, RAK_HEADER_BUTTONS_WIDE, } from "../../constants/rakuten_header-buttons";
function getBreakpoint() {
    const width = window.innerWidth;
    if (width <= 576)
        return "SMALL";
    if (width <= 770)
        return "MEDIUM";
    if (width <= 1025)
        return "LARGE";
    return "EXTRA_LARGE";
}
export const RakutenHeader = ({ isVisible }) => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState(getBreakpoint());
    useEffect(() => {
        const handleResize = () => {
            setCurrentBreakpoint(getBreakpoint());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    let buttonsToMap;
    switch (currentBreakpoint) {
        case "SMALL":
            buttonsToMap = RAK_HEADER_BUTTONS;
            break;
        case "MEDIUM":
            buttonsToMap = RAK_HEADER_BUTTONS_TWO;
            break;
        case "LARGE":
            buttonsToMap = RAK_HEADER_BUTTONS_THREE;
            break;
        case "EXTRA_LARGE":
            buttonsToMap = RAK_HEADER_BUTTONS_WIDE;
            break;
        default:
            buttonsToMap = [];
    }
    return (_jsxs("header", { className: isVisible ? "rakuten" : "rakuten rakuten--transparent", children: [_jsxs("div", { className: "rakuten__top", children: [_jsx("a", { className: "rakuten__top-paypal", href: "#", children: _jsx("img", { src: paypal, alt: "paypal", className: "rakuten__top-icon" }) }), _jsx("a", { className: "rakuten__top-text", href: "#", children: "Pour votre 1er paiement PayPal* b\u00E9n\u00E9ficiez de 7\u20AC offerts d\u00E8s 49\u20AC d\u2019achat avec le code PAYPAL7" })] }), _jsxs("div", { className: "rakuten__middle", children: [_jsxs("div", { className: "rakuten__middle-container", children: [_jsx("a", { href: "#", children: _jsx("img", { src: logo, alt: "logo", className: "rakuten__logo" }) }), _jsx(Input, {})] }), _jsx("div", { className: "rakuten__blackweek", children: _jsx("a", { href: "#", children: _jsx("img", { src: blackweek, alt: "blackweek", className: "rakuten__icon" }) }) })] }), _jsx("div", { className: "rakuten__bottom", children: buttonsToMap.map((button) => (_jsxs("button", { className: "rakuten__item", children: [_jsx("img", { src: button.icon, alt: button.title, className: button.title ? 'rakuten__item-icon' : 'rakuten__item-icon rakuten__item-icon--big' }), button.title && (_jsx("p", { className: "rakuten__item-text", children: button.title }))] }, button.title))) })] }));
};
