import React from "react";
import "./NextFooter.scss";
import profileIcon from "../../assets/profile.svg";
import { NextFooterNetworks } from "../NextFooterNetworks";
import { FOOTER_MENU } from "../../constants/next-footer-menu";
import chevron from "../../assets/chevron.svg";
import arrowTop from "../../assets/arrow-top.svg";

type Props = {
  isVisible: boolean;
  scrollToTop: () => void;
};

export const NextFooter: React.FC<Props> = ({
  isVisible,
  scrollToTop,
}) => {
  return (
    <footer className={isVisible ? "footer" : "footer footer--transparent"}>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <img src={arrowTop} alt="Scroll to Top" />
      </button>
      <NextFooterNetworks />
      <section className="footer__account">
        <img
          src={profileIcon}
          alt="facebook"
          className="footer__account-icon"
        />
        <div className="footer__account-container">
          <a href="#" className="footer__account-title">
            My Account
          </a>
          <a href="#" className="footer__account-subtitle">
            Sign-in to your account
          </a>
        </div>
      </section>
      <section className="footer__menu">
        {FOOTER_MENU.map((column) => (
          <div className="footer__column" key={column.title}>
            <img src={chevron} alt="chevron" className="footer__column-icon" />
            <p className="footer__column-title">{column.title}</p>
            {column.buttons.map((button) => (
              <a className="footer__link" key={button} href="#">
                {button}
              </a>
            ))}
          </div>
        ))}
      </section>
      <section className="footer__bottom">
        <a className="footer__mobile">View mobile site</a>
        <p className="footer__text">
          © 2024 Next Retail Ltd. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
