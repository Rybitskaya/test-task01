import React from "react";
import profileIcon from "../../assets/profile.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/x.svg";
import tiktok from "../../assets/tiktok.svg";
import instagram from "../../assets/instagram.svg";
import pinterest from "../../assets/pinterest.svg";
import youtube from "../../assets/youtube.svg";

export const NextFooterNetworks: React.FC = () => {
  return (
    <section className="footer__network">
      <p className="footer__network-text">Our Social Networks</p>
      <div className="footer__network-icons">
        <a className="footer__network-link" href="#">
          <img
            src={facebook}
            alt="facebook"
            className="footer__network-icon"
          />
        </a>
        <a className="footer__network-link" href="#">
          <img
            src={twitter}
            alt="twitter X"
            className="footer__network-icon"
          />
        </a>
        <a className="footer__network-link" href="#">
          <img src={tiktok} alt="tiktok" className="footer__network-icon" />
        </a>
        <a className="footer__network-link" href="#">
          <img
            src={profileIcon}
            alt="tiktok"
            className="footer__network-icon"
          />
        </a>
        <a className="footer__network-link" href="#">
          <img
            src={instagram}
            alt="instagram"
            className="footer__network-icon"
          />
        </a>
        <a className="footer__network-link" href="#">
          <img
            src={pinterest}
            alt="pinterest"
            className="footer__network-icon"
          />
        </a>
        <a className="footer__network-link" href="#">
          <img
            src={youtube}
            alt="youtube"
            className="footer__network-icon"
          />
        </a>
      </div>
    </section>
  );
};
