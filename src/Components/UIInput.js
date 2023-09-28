import classes from "../Styles/UIInput.module.scss";

const UIInput = ({ placeholder, type, value, setValue }) => {
  return (
    <input
      className={
        type === "number"
          ? classes["UIInput"] + " " + classes["number"]
          : classes["UIInput"] + " " + classes["string"]
      }
      placeholder={placeholder}
      value={value}
      setValue={setValue}
    />
  );
};

export default UIInput;
