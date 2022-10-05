import React, { useMemo, useState } from "react";

const useForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    desc: "",
    link: "",
    price: "",
  });
  const [error, setError] = useState({
    name: false,
    price: false,
    link: false,
  });

  const disabled = useMemo(
    () =>
      Object.keys(formValue)
        .filter((el) => el !== "desc")
        .filter((el) => !formValue[el]),
    [formValue]
  );

  return { error, setError, formValue, setFormValue, disabled };
};

export default useForm;
