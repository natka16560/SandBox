import classes from "../../Styles/Dish/Dish.module.scss";
import React, { useState } from "react";
import DishItem from "./DishItem.js";
import UIInput from "../UIInput";

const Dish = () => {
  const [name, setName] = useState("");
  const [composition, setComposition] = useState("");
  const [cost, setCost] = useState("");
  const [dishList, setDishList] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCompositionChange = (event) => {
    setComposition(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleSubmit = () => {
    setDishList([...dishList, { cost, composition, name }]);
  };

  const handleDelete = (index) => {
    const newList = dishList.filter((_, i) => i !== index);
    setDishList(newList);
  };

  return (
    <div className={classes["Dish"]}>
      <div className={classes["Dish__container"]}>
        <h1>Создание блюда</h1>

        <input
          placeholder="Название блюда"
          className=""
          value={name}
          onChange={handleNameChange}
        ></input>
        <input
          placeholder="Состав блюда"
          className=""
          value={composition}
          onChange={handleCompositionChange}
        ></input>
        <input
          placeholder="Стоимость блюда"
          className=""
          value={cost}
          onChange={handleCostChange}
        ></input>

        <UIInput placeholder="fff" type="number" />
        <UIInput placeholder="fff" type="string" />
        <button className="" onClick={() => handleSubmit()}>
          Создать
        </button>
      </div>
      <div className={classes["List"]}>
        {dishList.map((dish, index) => (
          <div key={index}>
            <DishItem
              name={dish.name}
              composition={dish.composition}
              cost={dish.cost}
            />
            <button onClick={() => handleDelete(index)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dish;
