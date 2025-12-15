"use client";
import styles from "@/app/components/Sidenav/Sidenav.module.css";
import Image from "next/image";
import { useState } from "react";

const otherCategoryOptions = [
  {
    name: "Home",
    id: 1,
  },
  {
    name: "Easy Monthly Installments",
    id: 2,
  },
  {
    name: "Shop by Brands",
    id: 3,
  },
  {
    name: "Become a Vendor",
    id: 4,
  },
];

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidenav = () => setIsOpen(!isOpen);
  return (
    <div className={styles.sidenavContainer}>
      <div>
        <div onClick={toggleSidenav} className={styles.categoryText}>
          <Image src="/asset/sidenavIcon.svg" alt="" width={13} height={12} />
          Brouse By Category
        </div>
        <div className={`${styles.sidenav} ${isOpen ? styles.open : ""}`}>
          <button className={styles.closeBtn} onClick={toggleSidenav}>
            &times;
          </button>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between", flex: "1" }}
      >
        <div className={styles.otherCategoryOptionsContainer}>
          {otherCategoryOptions.map((item) => (
            <div key={item.id} className={styles.otherCategoryOptions}>
              {item.name}
            </div>
          ))}
        </div>

        <div className={styles.socialIcons}>
          <Image
            src="/asset/facebookIcon.svg"
            alt=""
            width={11}
            height={22}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/asset/twitterIcon.svg"
            alt=""
            width={22}
            height={18}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/asset/linkedinIcon.svg"
            alt=""
            width={22}
            height={22}
            style={{ cursor: "pointer" }}
          />
          <Image
            src="/asset/instagramIcon.svg"
            alt=""
            width={22}
            height={22}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
