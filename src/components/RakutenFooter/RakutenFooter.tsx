import React, { useState } from "react";
import "./RakutenFooter.scss";
import {
  RAK_FOOTER_LINKS,
  RAK_FOOTER_NETWORKS,
  RAK_FOOTER_OFFERS,
  RAK_FOOTER_SERVICES,
  RAK_FOOTER_SPONSORS,
} from "../../constants/rak-footer-links";
import image from "../../assets/bagIcon.svg";
import cardIcon from "../../assets/cardIcon.svg";
import chevron from "../../assets/chevron.svg";
import shieldIcon from "../../assets/shieldIcon.svg";
import customerCareIcon from "../../assets/customerCareIcon.svg";
import plus from "../../assets/plusIcon.svg";
import logo from "../../assets/RakutenLogos.svg";
import appstore from "../../assets/appStoreIcon.svg";
import googlemarket from "../../assets/playStoreIcon.svg";
import arrowTop from "../../assets/arrow-top.svg";

type Props = {
  isVisible: boolean;
  isVisibleScroll: boolean;
  scrollToTop: () => void;
};

export const RakutenFooter: React.FC<Props> = ({
  isVisible,
  isVisibleScroll,
  scrollToTop,
}) => {
  return (
    <footer
      className={
        isVisible ? "rak-footer" : "rak-footer rak-footer--transparent"
      }
    >
      <button className="scroll-to-top" onClick={scrollToTop}>
        <img src={arrowTop} alt="Scroll to Top" />
      </button>
      <section className="rak-footer__top">
        <a href="#" className="rak-footer__top-link">
          <img
            src={image}
            alt="le choix"
            className="rak-footer__top-link-icon"
          />
          <div className="rak-footer__top-link-container">
            <p className="rak-footer__top-link-title">Le choix</p>
            <p className="rak-footer__top-link-subtitle">Neuf et occasion</p>
          </div>
        </a>
        <a href="#" className="rak-footer__top-link">
          <img
            src={cardIcon}
            alt="ClubR"
            className="rak-footer__top-link-icon"
          />
          <div className="rak-footer__top-link-container">
            <p className="rak-footer__top-link-title">Minimum</p>
            <p className="rak-footer__top-link-subtitle">5% remboursés</p>
          </div>
        </a>
        <a href="#" className="rak-footer__top-link">
          <img
            src={shieldIcon}
            alt="shieldIcon"
            className="rak-footer__top-link-icon"
          />
          <div className="rak-footer__top-link-container">
            <p className="rak-footer__top-link-title">La sécurité</p>
            <p className="rak-footer__top-link-subtitle">
              Satisfait ou remboursé
            </p>
          </div>
        </a>
        <a href="#" className="rak-footer__top-link">
          <img
            src={customerCareIcon}
            alt="customerCareIcon"
            className="rak-footer__top-link-icon"
          />
          <div className="rak-footer__top-link-container">
            <p className="rak-footer__top-link-title">Le service clients</p>
            <p className="rak-footer__top-link-subtitle">À votre écoute</p>
          </div>
        </a>
      </section>
      <section className="rak-footer__links">
        {RAK_FOOTER_LINKS.map((column) => (
          <div className="rak-footer__column" key={column.title}>
            <div className="rak-footer__column-button">
              <img
                src={column.icon}
                alt={column.title}
                className="rak-footer__column-icon"
              />
              <p className="rak-footer__column-title">{column.title}</p>
              <img src={plus} alt="plus" className="rak-footer__column-plus" />
            </div>
            <div className="rak-footer__column-links">
              {column.links.map((link) => (
                <p className="rak-footer__column-link" key={link}>
                  {link}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="rak-footer__networks">
        <div className="rak-footer__media">
          {RAK_FOOTER_NETWORKS.map((media) => (
            <>
              <a href="#" key={media.alt} className="rak-footer__media-link">
                <img
                  src={media.icon}
                  alt={media.alt}
                  className="rak-footer__media-icon"
                />
              </a>
            </>
          ))}
        </div>
        <div className="rak-footer__sponsors">
          {RAK_FOOTER_SPONSORS.map((sponsor) => (
            <>
              <a
                href="#"
                key={sponsor.alt}
                className="rak-footer__sponsors-link"
              >
                <img
                  src={sponsor.icon}
                  alt={sponsor.alt}
                  className="rak-footer__sponsors-icon"
                />
              </a>
            </>
          ))}
        </div>
      </section>
      <section className="rak-footer__mobile">
        <p className="rak-footer__mobile-text">
          Avec l&apos;appli Rakuten, bénéficiez de 5% remboursés en Rakuten
          Points sur tous vos achats !
        </p>
        <div className="rak-footer__mobile-buttons">
          <button className="rak-footer__mobile-button">
            <img
              src={appstore}
              alt="appstore"
              className="rak-footer__mobile-image"
            />
          </button>
          <button className="rak-footer__mobile-button">
            <img
              src={googlemarket}
              alt="googlemarket"
              className="rak-footer__mobile-image"
            />
          </button>
        </div>
      </section>
      <section className="rak-footer__services">
        <img src={logo} alt="logo" className="rak-footer__logo" />
        <div className="rak-footer__services-container">
          {RAK_FOOTER_SERVICES.map((service) => (
            <>
              <a href="#" key={service} className="rak-footer__service">
                {service}
              </a>
            </>
          ))}
        </div>
        <p className="rak-footer__rakuten">Rakuten.com</p>
        <div className="rak-footer__dropdown">
          <p className="rak-footer__dropdown-value">France</p>
          <img
            src={chevron}
            alt="arrow"
            className="rak-footer__dropdown-arrow"
          />
        </div>
      </section>
      <p className="rak-footer__copy">© Rakuten France 2000 - 2024</p>
      <section className="rak-footer__offers">
        {RAK_FOOTER_OFFERS.map((offer) => (
          <>
            <a href="#" key={offer} className="rak-footer__offer">
              {offer}
            </a>
          </>
        ))}
      </section>
    </footer>
  );
};
