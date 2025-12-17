"use client";

import styles from "@/app/components/selectOptions/SelectOptions.module.css";
import { getCategories } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SelectOptions = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getOptions = async () => {
      const res = await getCategories();
      setOptions(res);
    };

    getOptions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    router.push(`/products/category/${selectedValue}`);
  };

  return (
    <div className={styles.selectWrapper}>
      <select value={value} onChange={handleChange}>
        <option value="" disabled hidden>
          All Categories
        </option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
