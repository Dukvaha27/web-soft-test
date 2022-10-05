import React, { useRef, useState } from "react";
import "./selectStyles.scss";
import arrow from "../../assests/Rectangle 33.png";
import useOutSideAlerter from "../../hooks/useOutSideAlerter";

const Select = ({ list, onChange, value }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useOutSideAlerter(ref, () => setOpen(false));

  return (
    <div className={`select-container`}>
      <div ref={ref} className={`selectBlock ${open ? "open" : ""}`}>
        <div className={`select-item`} onClick={() => setOpen(!open)}>
          <span>{value.label}</span>
          <img src={arrow} alt="" className={open ? "open" : ""} />
        </div>
        {open &&
          list.length &&
          list
            .filter((el) => el.value !== value.value)
            .map(({ value, label }) => (
              <div
                key={value}
                onClick={() => {
                  onChange({
                    target: {
                      value: value,
                      label: label,
                    },
                  });
                  setOpen(false);
                }}
                className="custom-option"
              >
                {label}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Select;
