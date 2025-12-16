import Image from "next/image";
import styles from "@/app/components/HeroSection/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
        <Image
          src="/asset/heroImage.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "top" }}
        />

        <div className={styles.backgroundImageOverlay}>
          <div>
            <p className={styles.heroTitle}>
              Shop{" "}
              <span style={{ color: "#15ADB7" }}>
                Computer <br /> & experience
              </span>
            </p>
            <p className={styles.heroSubtitle}>
              You cannot inspect quality into the product; it is already
              <br />
              there.
              <br /> I am not a product of my circumstances. I am a product of{" "}
              <br /> my decisions.
            </p>

            <button className={styles.buttonContainer}>View More</button>
          </div>

          <div
            style={{
              marginLeft: "auto",
              marginRight: "14.5vw",
            }}
          >
            <Image
              src="/asset/discountImage.png"
              alt="Discount"
              width={320}
              height={320}
              style={{
                width: "clamp(50px, 12vw, 200px)",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          <div className={styles.sliderContainer}>
            <span className={styles.sliderChip}></span>
            <span className={styles.sliderChip}></span>
            <span className={styles.sliderChip}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
