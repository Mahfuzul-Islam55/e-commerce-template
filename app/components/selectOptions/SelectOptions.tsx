import styles from "@/app/components/selectOptions/SelectOptions.module.css";

const SelectOptions = () => {
  return (
    // Mock Data
    <div className={styles.selectWrapper}>
      <select name="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
};

export default SelectOptions;
