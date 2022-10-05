import React, { memo, useEffect } from "react";
import "./inputStyles.scss";
import useForm from "../../hooks/useForm";

const Input = ({
  label,
  placeholder,
  noRequired,
  textArea,
  value,
  onChange,
  name,
}) => {
  const { error, setError } = useForm();
  useEffect(() => {
    if (!value) {
      setError({ ...error, [name]: true });
    } else {
      setError({ ...error, [name]: false });
    }
  }, [value]);

  return (
    <div className={"inputBlock"}>
      <label htmlFor="input">
        {label}
        {!noRequired && <sup>●</sup>}
      </label>
      {textArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          id={"input"}
          placeholder={placeholder}
          className={`input ${textArea ? "area" : ""}`}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          id={"input"}
          placeholder={placeholder}
          className={`input ${textArea ? "area" : ""} ${
            error[name] ? "error" : ""
          }`}
        />
      )}
      {error[name] && !noRequired && (
        <span className={"required-field"}>Поле является обязательным</span>
      )}
    </div>
  );
};

export default memo(Input);
