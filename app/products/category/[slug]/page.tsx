import { getProductsByCategory } from "@/app/lib/api";
import styles from "@/app/components/NewArrival/NewArrival.module.css";
import Image from "next/image";

interface PageProps {
  params: { slug: string };
}
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

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.slug;

  const products: product[] = await getProductsByCategory(categoryName);

  return (
    <div>
      <h1 className={styles.categoryPageTitle}>
        {decodeURIComponent(categoryName)}
      </h1>
      <div className={styles.categoryPageContainer}>
        {Array.isArray(products) &&
          products.map((data) => (
            <div key={data.id} className={styles.arrivalCardContainer}>
              <h2 className={styles.categoryText}>{data.category}</h2>
              <h3 className={styles.titleText}>{data.title} </h3>
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

              <button className={styles.addToCartButton}>Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}
