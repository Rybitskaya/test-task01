import React from "react";
import "./Input.scss";
import search from "../../assets/search-input-button.svg";

type Props = {
  isNext?: boolean;
};

export const Input: React.FC<Props> = ({ isNext = false }) => {
  return (
    <div className={isNext ? "input" : "input input-rakuten"}>
      <input
        placeholder={isNext ? "Search product or brand" : "Que cherchez-vous?"}
        className={isNext ? "input__search" : "input-rakuten__search"}
      />
      <button className={isNext ? "input__button" : "input-rakuten__button"}>
        <img
          src={search}
          alt="search"
          className={isNext ? "input__icon" : "input-rakuten__icon"}
        />
      </button>
    </div>
  );
};
