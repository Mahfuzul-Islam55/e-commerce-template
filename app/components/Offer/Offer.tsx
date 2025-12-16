import styles from "@/app/components/Offer/Offer.module.css";
import ChipRow from "./Chip";
import Image from "next/image";
import stylesArrival from "@/app/components/Offer/Offer.module.css";

const offerList = [
  {
    id: 1,
    title: "Bin Bakar",
    actualPrice: "56.000",
    discountPrice: "110.000",
    alreadySold: 5,
    available: 8,
    image: "/asset/arrivalImage.png",
  },
  {
    id: 2,
    title: "Bin Bakar",
    actualPrice: "56.000",
    discountPrice: "110.000",
    alreadySold: 5,
    available: 8,
    image: "/asset/arrivalImage.png",
  },
  {
    id: 3,
    title: "Bin Bakar",
    actualPrice: "56.000",
    discountPrice: "110.000",
    alreadySold: 5,
    available: 8,
    image: "/asset/arrivalImage.png",
  },
  {
    id: 4,
    title: "Bin Bakar",
    actualPrice: "56.000",
    discountPrice: "110.000",
    alreadySold: 5,
    available: 8,
    image: "/asset/arrivalImage.png",
  },
  {
    id: 5,
    title: "Bin Bakar",
    actualPrice: "56.000",
    discountPrice: "110.000",
    alreadySold: 5,
    available: 8,
    image: "/asset/arrivalImage.png",
  },
];
const Offer = () => {
  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerChipContainer}>
        <h3 className={styles.offerTitle}>
          <span style={{ color: "#00CAD7" }}>Best</span> Deals
        </h3>
        <ChipRow />
      </div>

      <div className={styles.cards}>
        {offerList.map((data) => (
          <div
            key={data.id}
            className={styles.card}
            style={{
              flexDirection: data.id === 3 ? "column" : "row",
              alignItems: data.id === 3 ? "center" : "center",
            }}
          >
            <div
              style={{
                order: data.id === 3 ? 2 : 1,
              }}
            >
              <h3 className={styles.titleText}>{data.title}</h3>
              <h5 className={styles.discountPrice}>RS {data.discountPrice}</h5>
              <h5 className={styles.actualPriceText}>
                <del>RS {data.actualPrice}</del>
              </h5>
              <div style={{ paddingTop: "40px" }}>
                <h5 className={styles.available}>
                  Already Sold: {data.alreadySold}
                </h5>
                <h5 className={styles.available}>
                  Available: {data.available}
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
                order: data.id === 3 ? 1 : 2,
                width: data.id === 3 ? "100%" : "50%",
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
