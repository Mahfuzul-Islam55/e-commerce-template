"use client";
import styles from "@/app/components/Offer/Offer.module.css";
import ChipRow from "./Chip";
import { getProductsByCategory } from "@/app/lib/api";
import { useEffect, useState } from "react";

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Offer = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [offerData, setOfferData] = useState<product[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setOptions(data);
      setValue(data[0]);
    };
    getOptions();
  }, []);

  useEffect(() => {
    if (!value) return;
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(value);
        setOfferData(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [value]);

  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerChipContainer}>
        <h3 className={styles.offerTitle}>
          <span style={{ color: "#00CAD7" }}>Best</span> Deals
        </h3>
        <ChipRow options={options} value={value} setValue={setValue} />
      </div>

      <div className={styles.cards}>
        {offerData.map((data, index) => (
          <div
            key={index}
            className={styles.card}
            style={{
              flexDirection:
                index === 2
                  ? "column"
                  : [4, 5].includes(index)
                  ? "row-reverse"
                  : "row",
              alignItems: index === 2 ? "center" : "",
            }}
          >
            <div
              style={{
                order: index === 2 ? 2 : 1,
                width: index === 2 ? "100%" : "50%",
              }}
            >
              <h3 className={styles.titleText}>{data.title}</h3>
              <h5 className={styles.discountPrice}>RS {data.price}</h5>
              <h5 className={styles.actualPriceText}>
                <del>
                  RS {Math.floor(Math.random() * (200 - 100 + 1)) + 100}
                </del>
              </h5>
              <div style={{ paddingTop: "40px" }}>
                <h5 className={styles.available}>
                  Already Sold:{Math.floor(Math.random() * (10 - 20 + 1)) + 10}
                </h5>
                <h5 className={styles.available}>
                  Available: {Math.floor(Math.random() * (10 - 20 + 1)) + 10}
                </h5>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                order: index === 2 ? 1 : 2,
                width: index === 2 ? "100%" : "50%",
              }}
            >
              <h3 className={styles.offerText}>
                <span style={{ color: "#00CAD7", textAlign: "right" }}>
                  Special
                </span>{" "}
                Offer
              </h3>
              <div style={{ flex: 1, width: "100%" }}>
                <img
                  src={data.image}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
