import React, { useEffect, useState } from "react";
import "./RakutenHeader.scss";
import paypal from "../../assets/paypalIcon.svg";
import logo from "../../assets/rakuten-logo6.svg";
import blackweek from "../../assets/blackweek.svg";
import { Input } from "../Input";
import {
  RAK_HEADER_BUTTONS,
  RAK_HEADER_BUTTONS_THREE,
  RAK_HEADER_BUTTONS_TWO,
  RAK_HEADER_BUTTONS_WIDE,
  HeaderButton,
} from "../../constants/rakuten_header-buttons";

function getBreakpoint() {
  const width = window.innerWidth;
  if (width <= 576) return "SMALL";
  if (width <= 770) return "MEDIUM";
  if (width <= 1025) return "LARGE";
  return "EXTRA_LARGE";
}

type Props = {
  isVisible: boolean;
};

export const RakutenHeader: React.FC<Props> = ({ isVisible }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let buttonsToMap: HeaderButton[];
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

  return (
    <header className={isVisible ? "rakuten" : "rakuten rakuten--transparent"}>
      <div className="rakuten__top">
        <a className="rakuten__top-paypal" href="#">
          <img src={paypal} alt="paypal" className="rakuten__top-icon" />
        </a>
        <a className="rakuten__top-text" href="#">
          Pour votre 1er paiement PayPal* bénéficiez de 7€ offerts dès 49€
          d’achat avec le code PAYPAL7
        </a>
      </div>
      <div className="rakuten__middle">
        <div className="rakuten__middle-container">
          <a href="#">
            <img src={logo} alt="logo" className="rakuten__logo" />
          </a>
          <Input />
        </div>
        <div className="rakuten__blackweek">
          <a href="#">
            <img src={blackweek} alt="blackweek" className="rakuten__icon" />
          </a>
        </div>
      </div>

      <div className="rakuten__bottom">
        {buttonsToMap.map((button) => (
          <button className="rakuten__item" key={button.title}>
            <img
              src={button.icon}
              alt={button.title}
              className={button.title ? 'rakuten__item-icon' : 'rakuten__item-icon rakuten__item-icon--big'}
            />
            {button.title && (
              <p className="rakuten__item-text">{button.title}</p>
            )}
          </button>
        ))}
      </div>
    </header>
  );
};
