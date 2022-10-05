import React, {useEffect, useMemo, useState} from "react";
import "./catalogStyles.scss";
import Card from "../../components/Card";
import Select from "../../components/Select";
import useDeviceQualifer from "../../hooks/useDeviceQualifer";
import useOpenDialog from "../../store/services/app-services";
import {useDeleteProductMutation, useFetchProductsQuery} from "../../store/features/products";

const data = [...Array(20).keys()].map((el) => ({
  title: "Наименование товара",
  desc: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
  price: (el + 1) * 177,
}));

const listSelect = [
  { label: "По умолчанию", value: 0 },
  { label: "По возрастанию", value: 1 },
  { label: "По убыванию", value: 2 },
  { label: "По имени", value: 3 },
];


const Catalog = () => {
  const { desktop } = useDeviceQualifer();
  const [sortValue, setSortValue] = useState(listSelect[0]);
  const [removeProduct] = useDeleteProductMutation();

  const {data, isLoading} = useFetchProductsQuery()


  const { openDialog, setOpenDialog } = useOpenDialog();

  const onChangeHandler = ({ target }) => {
    setSortValue(target);
  };

  const deleteHandler = (_id) => {
    removeProduct(_id);
  };

  const products = useMemo(() => !isLoading && [...data], [data])
  return (
    <div className={"catalog-block"}>
      <div className={"catalog-action"}>
        {!desktop && (
          <button
            onClick={() => setOpenDialog(!openDialog)}
            className={"catalog-action-btn"}
          >
            Добавить
          </button>
        )}
        <Select value={sortValue} onChange={onChangeHandler} list={listSelect} />
      </div>
      {isLoading ? <div>loading..</div>:
        products
            ?.sort((a,b) => {
              if(sortValue.value === 0) return a.id - b.id;
              if(sortValue.value === 1) return a.price - b.price;
              if(sortValue.value === 2) return b.price - a.price;
              if(sortValue.value === 3) return a.title.localeCompare(b.title);


            })
        .map((el, idx) => (
          <Card {...el} key={idx} deleteHandler={deleteHandler} idx={el.id} />
        ))}
    </div>
  );
};

export default Catalog;
