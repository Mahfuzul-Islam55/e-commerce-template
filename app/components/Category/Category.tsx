"use client";
import styles from "@/app/components/Category/Category.module.css";
import Image from "next/image";
import { useState } from "react";

// Demo Data
const items: any = [
  { name: "electronics", thumbnail: "/asset/electronicsImage.svg" },
  { name: "jewelery", thumbnail: "/asset/fashionImage.svg" },
  { name: "men's clothing", thumbnail: "/asset/appliancesImage.svg" },
  { name: "women's clothing", thumbnail: "/asset/womensClothingImage.svg" },
  { name: "men's clothing", thumbnail: "/asset/appliancesImage.svg" },
  { name: "women's clothing", thumbnail: "/asset/womensClothingImage.svg" },
];

const Category = () => {
  const [index, setIndex] = useState<number>(0);
  const prevIndex = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
  const nextIndex = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.sliderWrapper}>
        <Image
          src={"/asset/arrowIconLeft.svg"}
          alt=""
          width={66}
          height={66}
          className={`${styles.arrow} ${styles.left}`}
          onClick={index !== 0 ? prevIndex : undefined}
        />

        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderContent}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {items.map((item: any, index: number) => (
              <div key={index}>
                <Image src={item.thumbnail} alt="" width={272} height={199} />
                <button className={styles.buttonContainer}>
                  <span className={styles.buttonText}>
                    {item.name.length > 10
                      ? item.name.slice(0, 10) + ".."
                      : item.name}
                  </span>
                  <span className={styles.buttonTextDefault}>Shop</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={"/asset/arrowIconLeft.svg"}
          alt=""
          width={66}
          height={66}
          className={`${styles.arrow} ${styles.right}`}
          onClick={index !== items.length - 1 ? nextIndex : undefined}
        />
      </div>
    </div>
  );
};

export default Category;
