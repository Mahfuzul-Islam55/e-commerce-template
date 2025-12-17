"use client";

import { useEffect, useState } from "react";
import { getProductsByCategory } from "@/app/lib/api";
import styles from "@/app/components/NewArrival/NewArrival.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";

type Product = {
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

interface CategoryPageProps {
  params: { slug: string };
}

export default function CategoryPage() {
  const params = useParams();
  const categoryName = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!categoryName) return;
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(categoryName);
        setProducts(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div>
      <h1 className={styles.categoryPageTitle}>
        {decodeURIComponent(categoryName || "")}
      </h1>
      <div className={styles.categoryPageContainer}>
        {products.map((data) => (
          <div key={data.id} className={styles.arrivalCardContainer}>
            <h2 className={styles.categoryText}>{data.category}</h2>
            <h3 className={styles.titleText}>
              {data.title.length > 40
                ? data.title.slice(0, 40) + ".."
                : data.title}
            </h3>
            <Image
              style={{ marginTop: "auto" }}
              src={data.image}
              alt={data.title}
              width={158}
              height={129}
            />
            <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
              <span className={styles.actualPriceText}>
                <del>RS 536</del>
              </span>
              <span className={styles.discountPrice}>RS {data.price}</span>
            </div>
            <button className={styles.addToCartButton}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
