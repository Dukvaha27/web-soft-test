import React from "react";
import "./buttonStyled.scss";
const Button = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? "btn-disabled" : "btn-success"}
      onClick={onClick}
    >
      Добавить
    </button>
  );
};

export default Button;
