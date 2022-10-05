import React, { useRef, useState } from "react";
import "./formStyles.scss";
import Input from "../Input";
import Button from "../Button";
import useForm from "../../hooks/useForm";
import useOpenDialog from "../../store/services/app-services";
import useOutSideAlerter from "../../hooks/useOutSideAlerter";
import useDeviceQualifer from "../../hooks/useDeviceQualifer";
import { useAddProductMutation } from "../../store/features/products";

const Form = () => {
  const [addProduct] = useAddProductMutation();

  const { desktop } = useDeviceQualifer();
  const ref = useRef();
  const { disabled, formValue, setFormValue } = useForm();
  const { setOpenDialog } = useOpenDialog();

  useOutSideAlerter(ref, () => setOpenDialog(false));

  const { name, desc, link, price } = formValue;

  const onChangeHandler = (ev) => {
    setFormValue({ ...formValue, [ev.target.name]: ev.target.value });
  };

  const handeAddProduct = () => {
    const body = {
      title: name,
      description: desc || " ",
      images: [link],
      price,
      categoryId: 1,
    };
    addProduct(body);
    setOpenDialog(false);
    setFormValue({name:"", desc:"", link:"", price:""})
  };

  return (
    <div ref={ref}>
      {desktop && <h1 className={"form-title"}>Добавление товара</h1>}
      <div className={"container"}>
        {!desktop && <h1 className={"form-title"}>Добавление товара</h1>}
        <Input
          name={"name"}
          value={name}
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
          label={"Наименование товара"}
          placeholder={"Введите наименование товара"}
        />
        <Input
          name={"desc"}
          value={desc}
          onChange={(e) => onChangeHandler(e)}
          label={"Описание товара"}
          noRequired
          textArea
          placeholder={"Введите описание товара"}
        />
        <Input
          name={"link"}
          value={link}
          onChange={(e) => onChangeHandler(e)}
          label={"Ссылка на изображение товара"}
          placeholder={"Введите ссылку"}
        />
        <Input
          name={"price"}
          value={price}
          onChange={(e) => onChangeHandler(e)}
          label={"Цена товара"}
          placeholder={"Введите цену"}
        />
        <Button disabled={disabled.length} onClick={handeAddProduct} />
      </div>
    </div>
  );
};

export default Form;
