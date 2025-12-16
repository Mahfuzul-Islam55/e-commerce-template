import styles from "@/app/components/NewArrival/NewArrival.module.css";
import Image from "next/image";
const NewArrival = () => {
  return (
    <div className={styles.arrivalContainer}>
      <hr style={{ opacity: 0.17, marginBottom: "86.5px" }} />

      <h3 className={styles.arrivalTitle}>
        <span style={{ color: "#00CAD7" }}>New</span> Arrivals
      </h3>

      <div style={{ display: "flex", gap: "31px" }}>
        <div className={styles.arrivalCardContainer}>
          <h2 className={styles.categoryText}>Bin Bakar Electronics</h2>
          <h3 className={styles.titleText}>Bin Bakar </h3>
          <Image
            src={"/asset/arrivalImage.png"}
            alt=""
            width={158}
            height={129}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <span className={styles.actualPriceText}>
              <del>RS 110.000</del>
            </span>
            <span className={styles.discountPrice}>RS 56.000</span>
          </div>

          <button className={styles.addToCartButton}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
