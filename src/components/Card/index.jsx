import React, { useState } from "react";
import img from "../../assests/images.png";
import vector from "../../assests/Vector.svg";
import "./cardStyles.scss";
import useFormatCurrency from "../../hooks/useFormatCurrency";

const Card = ({ title, description, price,images,id, deleteHandler, idx }) => {
  const [leave, setLeave] = useState(false);

  const image = images?.find(i => i) || images

  return (
    <div
      onMouseLeave={() => setLeave(false)}
      onMouseMove={() => setLeave(true)}
      className={"card-container"}
    >
      {leave && (
        <div className={"vector"} onClick={() => deleteHandler(id)}>
          <img src={vector} alt="" />
        </div>
      )}
      <div className="image-block">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <div className="card-desc">{description}</div>
        <div className="card-price">
          {useFormatCurrency(String(price))} руб.
        </div>
      </div>
    </div>
  );
};

export default Card;
