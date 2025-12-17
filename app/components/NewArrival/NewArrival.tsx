"use client";
import styles from "@/app/components/NewArrival/NewArrival.module.css";
import { getAllProducts } from "@/app/lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

const NewArrival = () => {
  const router = useRouter();
  const [products, setProducts] = useState<product[]>([]);

  const handleCartClick = () => {
    router.push("/pages/cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const products: product[] = await getAllProducts();
      setProducts(products);
    };
    fetchProduct();
  }, []);

  return (
    <div className={styles.arrivalContainer}>
      <hr style={{ opacity: 0.17, marginBottom: "86.5px" }} />

      <h3 className={styles.arrivalTitle}>
        <span style={{ color: "#00CAD7" }}>New</span> Arrivals
      </h3>

      <div className={styles.newArrivalPageContainer}>
        {Array.isArray(products) &&
          products.map((data) => (
            <div key={data.id} className={styles.arrivalCardContainer}>
              <h2 className={styles.categoryText}>{data.category}</h2>
              <h3 className={styles.titleText}>
                {data.title.length > 40
                  ? data.title.slice(0, 40) + ".."
                  : data.title}{" "}
              </h3>

              <Image
                style={{ marginTop: "auto" }}
                src={`${data.image}`}
                alt=""
                width={158}
                height={129}
              />

              <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                <span className={styles.actualPriceText}>
                  <del>
                    RS {Math.floor(Math.random() * (200 - 100 + 1)) + 100}
                  </del>
                </span>
                <span className={styles.discountPrice}>RS {data.price}</span>
              </div>

              <button
                onClick={handleCartClick}
                className={styles.addToCartButton}
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
