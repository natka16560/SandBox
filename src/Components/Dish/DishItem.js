import classes from "../../Styles/Dish/Dish.module.scss";

const DishItem = ({ name, composition, cost }) => {
  return (
    <div className={classes["DishItem"]}>
      <h2>{name}</h2>
      <p>Состав: {composition}</p>
      <p>Цена: {cost}</p>
    </div>
  );
};

export default DishItem;
