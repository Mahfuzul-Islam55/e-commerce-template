"use client";
import styles from "@/app/components/Category/Category.module.css";
import { getCategories } from "@/app/lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//As there is no image from the find All Category API
//I'm using some random mock images
const items: any = [
  "/asset/electronicsImage.svg",
  "/asset/fashionImage.svg",
  "/asset/appliancesImage.svg",
  "/asset/womensClothingImage.svg",
  "/asset/appliancesImage.svg",
  "/asset/womensClothingImage.svg",
];
type category = {
  name: string;
  thumbnail: string;
};

const Category = () => {
  const [index, setIndex] = useState<number>(0);
  const [options, setOptions] = useState<category[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getOptions = async () => {
      const data = await getCategories();
      const customizedData = Array.isArray(data)
        ? data.map((item) => {
            return {
              name: item,
              thumbnail: items[Math.floor(Math.random() * items.length)],
            };
          })
        : [];
      setOptions(customizedData);
    };

    getOptions();
  }, []);

  const handleClickHandle = (categoryName: string) => {
    router.push(`/products/category/${categoryName}`);
  };

  const prevIndex = () => {
    setIndex((prev) => (prev === 0 ? options.length - 1 : prev - 1));
  };
  const nextIndex = () => {
    setIndex((prev) => (prev === options.length - 1 ? 0 : prev + 1));
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
            {options.map((item: any, index) => (
              <div
                key={index}
                onClick={() => handleClickHandle(item.name)}
                style={{ cursor: "pointer" }}
              >
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
          onClick={index !== options.length - 1 ? nextIndex : undefined}
        />
      </div>
    </div>
  );
};

export default Category;
