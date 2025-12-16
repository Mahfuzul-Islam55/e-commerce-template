import styles from "@/app/components/Offer/Offer.module.css";
import ChipRow from "./Chip";

const Offer = () => {
  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerChipContainer}>
        <h3 className={styles.offerTitle}>
          <span style={{ color: "#00CAD7" }}>Best</span> Deals
        </h3>
        <ChipRow />
      </div>
    </div>
  );
};

export default Offer;
